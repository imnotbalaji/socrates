const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
    },
    options: {
        type: Array
    },
    answer: {
        type: String,
    },
    response: {
        type: String,
    }
});

const quizSchema = new Schema({
    title: {
        type: String
    },
    questionsArray: [questionSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    attempts: {
        type: Number
    },
    difficulty: {
        type: String
    }
});

module.exports = mongoose.model('Quiz', quizSchema);