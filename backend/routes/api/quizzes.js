const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');

// POST /api/quizzes/create
router.post('/create', async (req, res, next) => {
    debugger
    const newQuiz = new Quiz({
        questionsArray: req.body.questionsArray
    });

    const quiz = await newQuiz.save();

    return res.json(quiz)
    // res.json(req.body)
});

//PATCH /api/quizzes/:id
router.patch('/:id', async (req, res, next) => {
    const newResponse = req.body;
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, newResponse, function() {
        quiz.questionsArray.forEach((question, index) => {
            question.response = newResponse.updates[index];
        })
    })

    return res.json(quiz)
    // return res.json(quiz.questionsArray[0])

    // return res.json(quiz.questionsArray)
    // try {
    //     const quiz = await Quiz.findById(req.params.id)


    //     const newTweet = new Tweet({
    //         text: req.body.text,
    //         author: req.user._id
    //     });

    //     let tweet = await newTweet.save();
    //     tweet = await tweet.populate('author', '_id username');
    //     return res.json(tweet);
    // }
    // catch (err) {
    //     next(err);
    // }
});

//GET /api/quizzes/:id
router.get('/:id', async (req, res, next) => {
    try {
        const quiz = await Quiz.findById(req.params.id)
            .populate("questionsArray");
        return res.json(quiz);
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
            .populate("questionsArray")
            // .sort({ createdAt: -1 });
        return res.json(quizzes);
    }
    catch (err) {
        return res.json([]);
    }
});

module.exports = router;