const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');
const openAI = require("../../openAIUtil")

// POST /api/quizzes/create
router.post('/create', async (req, res, next) => {
    const inputs = req.body;
    const level = inputs.difficulty;
    const topic = inputs.topic;
    const userId = inputs.userId;
    const openAIQuiz = await openAI.main(topic, level);
    const rawQuiz = JSON.parse(openAIQuiz.message.content);

    rawQuiz.user = userId;

    const formattedQuiz = new Quiz(rawQuiz);

    const quiz = await formattedQuiz.save();

    return res.json(quiz)
});

//PATCH /api/quizzes/:id
router.patch('/:id', async (req, res, next) => {
    const newResponse = req.body;
    const quiz = await Quiz.findById(req.params.id)

    quiz.questionsArray.forEach((question, index) => {
        question.response = newResponse.updates[index];
    })
    
    let update = await quiz.save();

    return res.json(update);
});

//GET /api/quizzes/:id
router.get('/:id', async (req, res, next) => {
    try {
        const quiz = await Quiz.findById(req.params.id)
            .populate("questionsArray");

        const questionsList = {};
        const response = {};

        quiz.questionsArray.forEach((question) => {
            questionsList[question._id] = {
                _id: question._id,
                question: question.question,
                options: question.options,
                answer: question.answer,
                response: question.response
            }
        });

        response.questions = questionsList;

        return res.json(response);
    }
    catch (err) {
        const error = new Error('Quiz not found');
        error.statusCode = 404;
        error.errors = { message: "No quiz found with that id" };
        return next(error);
    }
});

/* GET quizzes listing. */
router.get('/', async (req, res) => {
    try {
        const quizzes = await Quiz.find()
            // .populate()
            // .sort({ createdAt: -1 });
            const quizzesList = {};
            const questionsList = {};
            const response = {};

            quizzes.forEach((quiz) => {
                const questionIds = []
                quiz.questionsArray.forEach((question) => {
                    questionIds.push(question._id)  
                    questionsList[question._id] = {
                        _id: question._id,
                        question: question.question,
                        options: question.options,
                        answer: question.answer,
                        response: question.response
                    }
                })

                quizzesList[quiz._id] = {
                    _id: quiz._id,
                    title: quiz.title,
                    user: quiz.user,
                    questions: questionIds
                }
            });

            response.quizzes = quizzesList;
            response.questions = questionsList;
        return res.json(response);
    }
    catch (err) {
        return res.json([]);
    }
});

module.exports = router;