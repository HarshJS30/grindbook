import React, { useState, useEffect } from "react";
import bgimg from '../assets/88.webp';
import logo from '../assets/logoo.png';
import avatar from '../assets/user.png';
import '../assets/grindbook.css';
import { FaClock, FaBookmark, FaSearch, FaTags } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/questions', {
                    method: 'GET',
                    credentials: 'include', 
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }

                const data = await response.json();
                setQuestions(data); 
            } catch (error) {
                console.error('Error fetching questions:', error);
                setError('Failed to fetch questions. Please try again.'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchQuestions();
    }, []); 

    return (
        <>
            <div
                className="board"
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    width: '100%'
                }}
            >
                <div className="dashbar">
                    <div className="logo">
                        <img src={logo} alt="GrindBook Logo" />
                        <h1>GrindBook</h1>
                    </div>
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input type="search" className="search" placeholder="search by name" />
                    </div>
                    <button onClick={() => navigate('/form')}>Add question</button>
                    <div className="avatar">
                        <img src={avatar} alt="Profile" className="profile" />
                        <label>My Profile</label>
                    </div>
                </div>
                <div className="table">
                    <div className="left-side">
                        <h2>Quick Filter</h2>
                        <p><FaClock /> Recent</p>
                        <p><FaBookmark /> Bookmarked</p>
                        <div className="poptags">
                            <h2>Popular Tags <FaTags /></h2>
                            <div className="tagname">
                                <p>Arrays</p>
                                <p>DP</p>
                                <p>Trees</p>
                                <p>Graph</p>
                                <p>Strings</p>
                                <p>Recursion</p>
                                <p>Sorting</p>
                                <p>Searching</p>
                                <p>Linked List</p>
                                <p>Hashmaps</p>
                                <p>Stacks</p>
                                <p>Queues</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        {loading ? (
                            <p>Loading questions...</p> 
                        ) : error ? (
                            <p style={{ color: 'red' }}>{error}</p> 
                        ) : (
                            <div className="question-cards">
                                {questions.map((question) => (
                                    <div className="question-card" key={question._id}>
                                        <div className="qtitle">
                                            <h3>{question.title}</h3>
                                        </div>
                                        <div className="wlearn">
                                            <p>{question.learnings}</p>
                                        </div>
                                        <div className="qtags">
                                            {question.tags.map((tag, index) => (
                                                <p key={index}>{tag}</p>
                                            ))}
                                        </div>
                                        <Link to={`/question/${question._id}`}>See Whole Question</Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}