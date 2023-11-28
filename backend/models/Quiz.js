const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    optionOne: {
        type: String,
    },
    optionTwo: {
        type: String,
    },
     optionThree: {
        type: String,
    },
    optionFour: {
        type: String,
    }
});

const questionSchema = new Schema({
    question: {
        type: String,
    },
    options: {
        optionsArray: [optionSchema],
    },
    answer: {
        type: String,
    },
    response: {
        type: String,
    }
});

const quizSchema = new Schema({
    questionsArray: [questionSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);