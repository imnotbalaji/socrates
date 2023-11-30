const RECEIVE_QUIZZES = 'quizzes/RECEIVE_QUIZZES';

export const receiveQuizzes = quizzes => {
    return {
        type: RECEIVE_QUIZZES,
        quizzes
    }
}

const questionsReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch (action.type) {
      
        case RECEIVE_QUIZZES:
            return { ...nextState, ...action.quizzes.questions }
        default:
            return state;
    }
}

export default questionsReducer