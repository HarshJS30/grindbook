const Question = require("../Models/Question");

const createQuestion = async (req, res) => {
    try {
        const { title, link, learnings, tags, notes } = req.body;
        const userId = req.user.id; 

        const newQuestion = new Question({
            userId,
            title,
            link,
            learnings,
            tags,
            notes
        });

        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully", question: newQuestion });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createQuestion };
