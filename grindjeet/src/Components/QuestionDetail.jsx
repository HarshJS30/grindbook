import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaBook, FaTags, FaStickyNote } from "react-icons/fa";
import tree from "../assets/tree.avif";
import bgimg from "../assets/57.webp";

export default function QuestionDetail() {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/questions/${id}`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch question");
                }

                const data = await response.json();
                setQuestion(data);
            } catch (error) {
                console.error("Error fetching question:", error);
                setError("Failed to fetch question. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuestion();
    }, [id]);

    if (loading) {
        return <p className="loading">Loading question...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    const makeLinkAbsolute = (link) => {
        if (!link.startsWith("http://") && !link.startsWith("https://")) {
            return `https://${link}`;
        }
        return link;
    };

    return (
        <div className="question-detail">
            <div className="overlay"></div>
            <img className="background-img" 
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    width: '100%'
                }}
            />
            <div className="content">
                <img className="tree-img" src={tree} alt="Tree" />
                <div className="details">
                    <h1>{question.title}</h1>
                    <button onClick={()=>navigate('/dashboard')}>Back to Dashboard</button>
                    <p className="link">
                        <FaExternalLinkAlt className="icon" />
                        <strong> Link:</strong>
                        <a href={makeLinkAbsolute(question.link)} target="_blank" rel="noopener noreferrer">
                            {question.link}
                        </a>
                    </p>
                    <p>
                        <FaBook className="icon" /> <strong>Learnings:</strong>
                        <br />
                        {question.learnings}
                    </p>
                    <p>
                        <FaTags className="icon" /> <strong>Tags:</strong>
                        <br />
                        {question.tags.join(", ")}
                    </p>
                    <p>
                        <FaStickyNote className="icon" /> <strong>Notes:</strong>
                        <br />
                        {question.notes}
                    </p>
                </div>
            </div>
        </div>
    );
}
