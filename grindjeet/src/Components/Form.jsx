import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import '../assets/grindbook.css';
import { HashLoader } from 'react-spinners';

const MenuBar = ({ editor }) => {
    if (!editor) return null;
    return (
        <div className="editor-menu">
            <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>bold</button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>italic</button>
            <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>strike</button>
            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>bullet list</button>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>ordered list</button>
            <button type="button" onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>code block</button>
        </div>
    );
};

const TiptapEditor = ({ content, onChange, placeholder }) => {
    const editor = useEditor({
        extensions: [StarterKit, Placeholder.configure({ placeholder: placeholder })],
        content: content,
        onUpdate: ({ editor }) => { onChange(editor.getHTML()); },
    });
    return (
        <div className="editor-container">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default function Form() {
    const navigate = useNavigate();
    const tags = ['Arrays', 'DP', 'Trees', 'Graph', 'Strings', 'Recursion', 'Sorting', 'Searching', 'Linked List', 'Hashmaps', 'Stacks', 'Queues'];
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [learnings, setLearnings] = useState('');
    const [notes, setNotes] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await fetch('https://grindbook.onrender.com/verify', { method: 'POST', credentials: 'include' });
                if (!response.ok) throw new Error('Not authenticated');
            } catch (error) {
                console.error('User not authenticated:', error);
                alert('You are not logged in. Redirecting to login...');
                navigate('/login');
            }
        };
        verifyUser();
    }, [navigate]);

    const toggleDropdown = () => { setIsDropdownOpen(!isDropdownOpen); };
    const handleTagSelection = (tag) => {
        if (selectedTags.includes(tag)) setSelectedTags(selectedTags.filter((t) => t !== tag));
        else setSelectedTags([...selectedTags, tag]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const questionData = { title, link, learnings, tags: selectedTags, notes };
        try {
            const response = await fetch('https://grindbook.onrender.com/api/add-question', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(questionData),
            });
            if (!response.ok) throw new Error('Failed to add question');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error adding question:', error);
            alert('Failed to add question. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add" style={{position:'relative'}}>
            <div className="form-content-container">
                <button className="btn" onClick={() => navigate('/dashboard')}>Back to Home</button>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="title">Question Title</label>
                    <input type="text" id="title" placeholder="Enter title of the Question" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <label htmlFor="link">Question Link</label>
                    <input type="text" id="link" placeholder="Enter the link of the question" className="form-input" value={link} onChange={(e) => setLink(e.target.value)} required />
                    <label htmlFor="learnings">What did the question teach you?</label>
                    <TiptapEditor content={learnings} onChange={setLearnings} placeholder="Tell the crisp of what you learnt from the question" />
                    <label htmlFor="tags">Select relevant tags</label>
                    <div className="tag-dropdown">
                        <button type="button" className="tag-dropdown-button" onClick={toggleDropdown}>{selectedTags.length > 0 ? selectedTags.join(', ') : 'Select Tags'}</button>
                        {isDropdownOpen && (
                            <div className="tag-dropdown-content">
                                {tags.map((tag) => (
                                    <label key={tag} className="tag-option">
                                        <input type="checkbox" value={tag} checked={selectedTags.includes(tag)} onChange={() => handleTagSelection(tag)} />{tag}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <label htmlFor="notes">Additional Notes</label>
                    <TiptapEditor content={notes} onChange={setNotes} placeholder="Additional notes or the solution of the question" />
                    <button type="submit" className="btn" disabled={loading}>{loading ? <HashLoader size={20} color={'#3498db'} loading={loading} /> : 'Add Question'}</button>
                </form>
            </div>
            {loading && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 10 }}>
                    <HashLoader size={60} color={'#3498db'} loading={loading} />
                </div>
            )}
        </div>
    );
}