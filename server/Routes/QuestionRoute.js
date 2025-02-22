const express = require("express");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const { createQuestion } = require("../Controllers/QuestionController");

const router = express.Router();

router.post("/add-question", authMiddleware, createQuestion);

module.exports = router;
