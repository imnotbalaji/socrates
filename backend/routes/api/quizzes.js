const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');

// POST /api/quizzes/create
router.post('/create', async (req, res, next) => {
    debugger
    const newQuiz = new Quiz({
        title: req.body.title,
        user: req.body.user,
        questionsArray: req.body.questionsArray
    });



    // const newQuiz = new Quiz({

    // })

    const quiz = await newQuiz.save();
    const questions = []

    quiz.questionsArray.forEach((question) => {
        questions.push(question._id)
    })

    return res.json(quiz)
    // res.json(req.body)
});

//PATCH /api/quizzes/:id
router.patch('/:id', async (req, res, next) => {
    const newResponse = req.body;
    const quiz = await Quiz.findById(req.params.id)

    quiz.questionsArray.forEach((question, index) => {
        question.response = newResponse.updates[index];
    })
    
    let update = await quiz.save();

    return res.json(update)
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

            // const quizzesArray = Object.values(quizzes);
            // const response = {};

            // quizzesArray.forEach((quiz) => {
            //     const questionIds = [];

            //     quiz.questionsArray.forEach((question) => {
            //         questionIds.push(question._id)
            //     })

            //     response[quizzes][quiz._id] = {
            //         title: quiz.title,
            //         user: quiz.user,
            //         questions: questionIds
            //     }
            // })

        return res.json(response);
    }
    catch (err) {
        return res.json([]);
    }
});

module.exports = router;