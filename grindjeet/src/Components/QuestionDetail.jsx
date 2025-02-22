import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function QuestionDetail() {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/questions/${id}`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch question');
                }

                const data = await response.json();
                setQuestion(data);
            } catch (error) {
                console.error('Error fetching question:', error);
                setError('Failed to fetch question. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuestion();
    }, [id]);

    if (loading) {
        return <p>Loading question...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    const makeLinkAbsolute = (link) => {
        if (!link.startsWith('http://') && !link.startsWith('https://')) {
            return `https://${link}`;
        }
        return link;
    };

    return (
        <div className="question-detail">
            <h1>{question.title}</h1>
            <p>
                <strong>Link:</strong>{" "}
                <a href={makeLinkAbsolute(question.link)} target="_blank" rel="noopener noreferrer">
                    {question.link}
                </a>
            </p>
            <p><strong>Learnings:</strong> {question.learnings}</p>
            <p><strong>Tags:</strong> {question.tags.join(', ')}</p>
            <p><strong>Notes:</strong> {question.notes}</p>
        </div>
    );
}