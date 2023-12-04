const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');
const openAI = require("../../openAIUtil.js");
const { restoreUser } = require('../../config/passport');

// POST /api/quizzes/create
router.post('/create', async (req, res, next) => {
    const inputs = req.body;
    const level = inputs.difficulty;
    const topic = inputs.topic;
    const userId = inputs.userId;
    const openAIQuiz = await openAI.getquiz(topic, level);
    const rawQuiz = JSON.parse(openAIQuiz.message.content);

    rawQuiz.user = userId;
    rawQuiz.attempts = 0;
    rawQuiz.difficulty = level;
    const coverURL = await openAI.getCoverImage(topic);
    rawQuiz.coverUrl = coverURL

    const formattedQuiz = new Quiz(rawQuiz);

    const quiz = await formattedQuiz.save();

    const quizzesList = {};
    const questionsList = {};
    const response = {};
    const questionIds = [];

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
        questions: questionIds,
        coverURL: quiz.coverUrl

    }

    response.quizzes = quizzesList;
    response.questions = questionsList;

    return res.json(response)
});

//PATCH /api/quizzes/:id
router.patch('/:id', async (req, res, next) => {
    try {
        const newResponse = req.body;
        const quiz = await Quiz.findById(req.params.id)
    
        quiz.questionsArray.forEach((question, index) => {
            question.response = newResponse.updates[index];
        })
        
        let update = await quiz.save();

        const questionsList = {};
        const response = {};

        update.questionsArray.forEach((question) => {
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
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }

});

router.delete('/:id', async (req, res, next) => {
    const quizId = req.params.id

    try {
        const result = await Quiz.findOneAndDelete({_id: quizId});
        
        if (!result) {
            return res.status(404).json({ message: 'Document not found' });
        }

        return res.status(200).json({ message: 'Document deleted successfully' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
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
router.get('/', restoreUser, async (req, res) => {
    try {
        // const quizzes = await Quiz.find({ user: '65678a007e8976d1f9f3c22f' })
        const quizzes = await Quiz.find({ user: req.user._id });
        // const quizzes = await Quiz.find();
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
                        response: question.response,
                       
                    }
                })

                quizzesList[quiz._id] = {
                    _id: quiz._id,
                    title: quiz.title,
                    user: quiz.user,
                    questions: questionIds,
                    coverURL: quiz.coverUrl
                }
            });

            response.quizzes = quizzesList;
            // response.questions = questionsList;
        return res.json(response);
    }
    catch (err) {
        return res.json([]);
    }
});

module.exports = router;