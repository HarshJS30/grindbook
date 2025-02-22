import React, { useState, useRef, useEffect } from "react";

export default function FAQ() {
    const faqData = [
        {
            question: "How do I create an account??",
            answer: "Sign up by providing a valid email address and a secure password. You’ll receive a confirmation email to verify your account before logging in.",
        },
        {
            question: "How do I log a new question??",
            answer: "You can add a new question by navigating to the 'Add Question' page and filling out the form.",
        },
        {
            question: "How do I categorize my DSA questions?",
            answer: "Use tags  when logging a question to organize them by topic .",
        },
        {
            question: "Is my login information secure?",
            answer: "Yes, we use encryption to protect your credentials during transmission and storage. Passwords are hashed and never stored in plain text.",
        },
        {
            question: "What types of questions can I log?",
            answer: "You can log any DSA-related problem, including topics like arrays, linked lists, trees, graphs, sorting algorithms, dynamic programming, etc.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    useEffect(() => {
        faqData.forEach((_, index) => {
            if (answerRefs.current[index]) {
                answerRefs.current[index].style.height = openIndex === index
                    ? `${answerRefs.current[index].scrollHeight}px`
                    : '0px';
            }
        });
    }, [openIndex, faqData]);

    return (
        <div className="faq">
            <div className="frequency">
                <div className="asked">
                    <h1>Frequently Asked</h1>
                    <h1>Questions</h1>
                </div>
                <div className="rq">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                <h3>{faq.question}</h3>
                                <div className={`toggle-icon ${openIndex === index ? "open" : ""}`}>
                                    {openIndex === index ? "×" : "+"}
                                </div>
                            </div>
                            <div
                                className="faq-answer"
                                ref={(el) => (answerRefs.current[index] = el)}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}