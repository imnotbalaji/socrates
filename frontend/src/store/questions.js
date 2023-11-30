const RECEIVE_QUIZZES = 'quizzes/RECEIVE_QUIZZES';
const RECEIVE_QUIZ = 'quizzes/RECEIVE_QUIZ';

export const receiveQuizzes = quizzes => {
    return {
        type: RECEIVE_QUIZZES,
        quizzes
    }
}

export const receiveQuiz = quiz => {
    return {
        type: RECEIVE_QUIZ,
        quiz
    }
    
}

const questionsReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch (action.type) {
      
        case RECEIVE_QUIZZES:
            return { ...nextState, ...action.quizzes.questions }
        case RECEIVE_QUIZ:
            return { ...action.quiz.questions }
        default:
            return state;
    }
}

export default questionsReducer