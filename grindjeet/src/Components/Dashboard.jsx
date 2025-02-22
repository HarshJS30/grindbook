import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
                const response = await fetch('https://grindbook.onrender.com/api/questions', {
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
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
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
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/form')}>
                    Add question
                </motion.button>
                <motion.div whileHover={{ scale: 1.1 }} className="avatar">
                    <img src={avatar} alt="Profile" className="profile" />
                </motion.div>
            </div>
            <div className="table">
                <div className="left-side">
                    <h2>Quick Filter</h2>
                    <motion.p whileHover={{ x: 10 }}><FaClock /> Recent</motion.p>
                    <motion.p whileHover={{ x: 10 }}><FaBookmark /> Bookmarked</motion.p>
                    <div className="poptags">
                        <h2>Popular Tags <FaTags /></h2>
                        <div className="tagname">
                            {['Arrays', 'DP', 'Trees', 'Graph', 'Strings', 'Recursion', 'Sorting', 'Searching', 'Linked List', 'Hashmaps', 'Stacks', 'Queues'].map((tag, index) => (
                                <motion.p key={index} whileHover={{ scale: 1.1 }}>{tag}</motion.p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    {loading ? (
                        <p>Loading questions...</p>
                    ) : error ? (
                        <p style={{ color: 'red' }}>{error}</p>
                    ) : questions.length === 0 ? (
                        <div className="question-cards">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                transition={{ duration: 0.5 }}
                                className="question-card"
                            >
                                <div className="qtitle">
                                    <h3>Sample Card</h3>
                                </div>
                                <div className="wlearn">
                                    <p>Here you can write what you learnt</p>
                                </div>
                                <div className="qtags">
                                    <p>Sample Tag</p>
                                </div>
                                <Link to="/form">Add a Question</Link>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="question-cards">
                            {questions.map((question) => (
                                <motion.div 
                                    key={question._id}
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.5, delay: 0.1 * questions.indexOf(question) }}
                                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}
                                    className="question-card"
                                >
                                    <div className="qtitle">
                                        <h3>{question.title}</h3>
                                    </div>
                                    <div 
                                        className="wlearn" 
                                        dangerouslySetInnerHTML={{ __html: question.learnings }} 
                                    />
                                    <div className="qtags">
                                        {question.tags.map((tag, index) => (
                                            <p key={index}>{tag}</p>
                                        ))}
                                    </div>
                                    <Link to={`/question/${question._id}`}>See Whole Question</Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}