import React from "react";
import bgimg from '../assets/88.webp';
import logo from '../assets/logoo.png';
import avatar from '../assets/user.png';
import '../assets/grindbook.css';
import { FaClock, FaBookmark, FaSearch, FaTags } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Dashboard() {
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
                    <button>Add question</button>
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
                        <div className="question-cards">
                            {Array(10).fill(null).map((_, index) => (
                                <div className="question-card" key={index}>
                                    <div className="qtitle">
                                        <h3>Two Sum Problem</h3>
                                    </div>
                                    <div className="wlearn">
                                        <p>Learned how to use hashmap for O(n) solution instead of nested loops.</p>
                                    </div>
                                    <div className="qtags">
                                        <p>Arrays</p>
                                        <p>Hashtable</p>
                                        <p>DP</p>
                                    </div>
                                    <Link>See Whole Question</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}