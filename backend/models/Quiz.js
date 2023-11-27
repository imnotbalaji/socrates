const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    optionOne: {
        type: String,
        required: true
    },
    optionTwo: {
        type: String,
        required: true
    },
     optionThree: {
        type: String,
         required: true
    },
    optionFour: {
        type: String,
        required: true
    }
});

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        optionsArray: [optionSchema],
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    }
});

const quizSchema = new Schema({
    questionsArray: [questionSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);