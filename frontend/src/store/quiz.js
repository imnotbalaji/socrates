import jwtFetch from './jwt';

const RECEIVE_QUIZZES = 'quizzes/RECEIVE_QUIZZES'

export const receiveQuizzes = quizzes => {
    return {
        type: RECEIVE_QUIZZES,
        quizzes
    }
}

export const fetchQuizzes = () => async dispatch => {
    const res = await jwtFetch('/api/quizzes/')
    if (res.ok) {
        const quizzes = await res.json();
        dispatch(receiveQuizzes(quizzes));
    }
}

const quizzesReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_QUIZZES:
            return { ...action.quizzes };
        default:
            return state;
    }
}

export default quizzesReducer