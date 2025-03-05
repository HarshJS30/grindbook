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
            notes,
        });

        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully", question: newQuestion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find({ userId: req.user.id });
        res.status(200).json(questions);
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ message: "Failed to fetch questions" });
    }
};

const getQuestionById = async (req, res) => {
    try {
        const questionId = req.params.id; 
        const userId = req.user.id; 

        const question = await Question.findOne({ _id: questionId, userId });

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json(question); 
    } catch (error) {
        console.error("Error fetching question by ID:", error);
        res.status(500).json({ message: "Failed to fetch question" });
    }
};

const deleteQuestion = async(req,res)=>{
    try{
        const {id} = req.params;
        const deletedQuestion = await Question.findByIdAndDelete(id);

        if(!deletedQuestion){
            return res.status(402).json({message:"Question not found"})
        }
        res.status(200).json({message:"Question Deleted"})      
    }catch(err){
        res.status(500).json({message:"Something up with backend"})
    }
}

module.exports = {
    createQuestion,
    getQuestions,
    getQuestionById,
    deleteQuestion,
};