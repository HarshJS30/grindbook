import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaBook, FaTags, FaStickyNote } from "react-icons/fa";
import tree from "../assets/tree.avif";
import bgimg from "../assets/57.webp";
import { HashLoader } from 'react-spinners';

export default function QuestionDetail() {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch(`https://grindbook.onrender.com/api/questions/${id}`, {
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
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
                <HashLoader size={60} color={'#3498db'} loading={loading} />
            </div>
        );
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

    const handleDelete = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://grindbook.onrender.com/api/questions/${id}`, {
                method: "DELETE",
                credentials: "include",
            });
    
            if (!response.ok) throw new Error("Failed to delete");
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert("Failed to delete the question.");
        }
        setLoading(false);
    };
    

    return (
        <div className="question-detail" style={{position:'relative'}}>
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
                    <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
                    <button className="delete" onClick={handleDelete}>Delete this Question</button>
                    <p className="link">
                        <FaExternalLinkAlt className="icon" />
                        <strong> Link:</strong>
                        <a href={makeLinkAbsolute(question.link)} target="_blank" rel="noopener noreferrer">
                            {question.link}
                        </a>
                    </p>
                    <div>
                        <FaBook className="icon" /> <strong>Learnings:</strong>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: question.learnings }} />
                    </div>
                    <p>
                        <FaTags className="icon" /> <strong>Tags:</strong>
                        <br />
                        {question.tags.join(", ")}
                    </p>
                    <div>
                        <FaStickyNote className="icon" /> <strong>Notes:</strong>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: question.notes }} />
                    </div>
                </div>
            </div>
        </div>
    );
}