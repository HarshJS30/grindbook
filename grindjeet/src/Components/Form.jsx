import React, { useState, useEffect } from 'react';
import '../assets/grindbook.css';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();

    // Predefined tags
    const tags = [
        'Arrays', 'DP', 'Trees', 'Graph', 'Strings', 'Recursion',
        'Sorting', 'Searching', 'Linked List', 'Hashmaps', 'Stacks', 'Queues'
    ];

    // State for form fields
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [learnings, setLearnings] = useState('');
    const [notes, setNotes] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    
    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await fetch('http://localhost:4000/verify', {
                    method: 'POST',
                    credentials: 'include', 
                });

                if (!response.ok) {
                    throw new Error('Not authenticated');
                }

                const data = await response.json();
                console.log('User verified:', data);
            } catch (error) {
                console.error('User not authenticated:', error);
                alert('You are not logged in. Redirecting to login...');
                navigate('/login');
            }
        };

        verifyUser();
    }, [navigate]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleTagSelection = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const questionData = {
            title,
            link,
            learnings,
            tags: selectedTags,
            notes,
        };

        try {
            const response = await fetch('http://localhost:4000/api/add-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', 
                body: JSON.stringify(questionData),
            });

            if (!response.ok) {
                throw new Error('Failed to add question');
            }

            const result = await response.json();
            console.log('Question added successfully:', result);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error adding question:', error);
            alert('Failed to add question. Please try again.');
        }
    };

    return (
        <div className="add">
            <div className="form-content-container">
                <button className="btn" onClick={() => navigate('/dashboard')}>
                    Back to Home
                </button>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="title">Question Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title of the Question"
                        className="form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="link">Question Link</label>
                    <input
                        type="text"
                        id="link"
                        placeholder="Enter the link of the question"
                        className="form-input"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                    <label htmlFor="learnings">What did the question teach you?</label>
                    <textarea
                        id="learnings"
                        placeholder="Tell the crisp of what you learnt from the question"
                        className="form-textarea"
                        value={learnings}
                        onChange={(e) => setLearnings(e.target.value)}
                        required
                    />
                    <label htmlFor="tags">Select relevant tags</label>
                    <div className="tag-dropdown">
                        <button
                            type="button"
                            className="tag-dropdown-button"
                            onClick={toggleDropdown}
                        >
                            {selectedTags.length > 0 ? selectedTags.join(', ') : 'Select Tags'}
                        </button>
                        {isDropdownOpen && (
                            <div className="tag-dropdown-content">
                                {tags.map((tag) => (
                                    <label key={tag} className="tag-option">
                                        <input
                                            type="checkbox"
                                            value={tag}
                                            checked={selectedTags.includes(tag)}
                                            onChange={() => handleTagSelection(tag)}
                                        />
                                        {tag}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea
                        id="notes"
                        placeholder="Additional notes or the solution of the question"
                        className="form-textarea"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <button type="submit" className="btn">
                        Add Question
                    </button>
                </form>
            </div>
        </div>
    );
}