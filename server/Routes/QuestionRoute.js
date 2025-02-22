const express = require("express");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const { createQuestion, getQuestions, getQuestionById } = require("../Controllers/QuestionController");

const router = express.Router();

router.post("/add-question", authMiddleware, createQuestion);
router.get("/questions", authMiddleware, getQuestions);
router.get("/questions/:id", authMiddleware, getQuestionById);

module.exports = router;