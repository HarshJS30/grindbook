import React, { useState } from 'react';
import '../assets/grindbook.css'; 
import { useNavigate } from "react-router-dom";

export default function Form() {

    const navigate = useNavigate();

    const tags = [
    "Arrays", "DP", "Trees", "Graph", "Strings", "Recursion",
    "Sorting", "Searching", "Linked List", "Hashmaps", "Stacks", "Queues"
    ];

    const [selectedTags, setSelectedTags] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    return (
    <div className="add">
        <div className="form-content-container">
        <button className='btn' onClick={()=>navigate('/dashboard')}>Back to Home</button>
        <form className="form-container">
            <label htmlFor="title">Question Title</label>
            <input type="text" id="title" placeholder="Enter title of the Question" className="form-input" />

            <label htmlFor="link">Question Link</label>
            <input type="text" id="link" placeholder="Enter the link of the question" className="form-input" />

            <label htmlFor="learnings">What did the question teach you?</label>
            <textarea id="learnings" placeholder="Tell the crisp of what you learnt from the question" className="form-textarea" />

            <label htmlFor="tags">Select relevant tags</label>
            <div className="tag-dropdown">
            <button type="button" className="tag-dropdown-button" onClick={toggleDropdown}>
                {selectedTags.length > 0 ? selectedTags.join(', ') : "Select Tags"}
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
            <textarea id="notes" placeholder="Additional notes or the solution of the question" className="form-textarea" />
        </form>
        </div>
    </div>
    );
    }
