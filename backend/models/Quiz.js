const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const optionSchema = new Schema({
//     optionOne: {
//         type: String,
//     },
//     optionTwo: {
//         type: String,
//     },
//      optionThree: {
//         type: String,
//     },
//     optionFour: {
//         type: String,
//     }
// });

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
    }
});

module.exports = mongoose.model('Quiz', quizSchema);