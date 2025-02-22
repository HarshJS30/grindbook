const express = require("express");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const { createQuestion, getQuestions } = require("../Controllers/QuestionController");

const router = express.Router();

router.post("/add-question", authMiddleware, createQuestion);
router.get("/questions", authMiddleware, getQuestions);

module.exports = router;