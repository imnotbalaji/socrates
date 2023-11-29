import jwtFetch from './jwt';

const RECEIVE_QUIZZES = 'quizzes/RECEIVE_QUIZZES'
const RECEIVE_QUIZ = 'quizzes/RECEIVE_QUIZ'

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

// useSelectors
export const getQuizzes = state => {
    if (state.quizzes) return (state.quizzes.quizzes);
    return [];
}

export const getProduct = quizId => {
    return state => {
        if (state.quizzes) return state.quizzes[quizId];
        return null;
    }
}
// Thunk action creators

export const fetchQuizzes = () => async dispatch => {
    const res = await jwtFetch('/api/quizzes/')
    if (res.ok) {
        const quizzes = await res.json();
        dispatch(receiveQuizzes(quizzes));
        return res
    }
    
}

export const fetchQuiz = quizId => async dispatch => {
    const res = await jwtFetch(`/api/quizzes/${quizId}`);

    if (res.ok) {
        const quiz = await res.json();
        dispatch(receiveQuiz(quiz));
    }
}

export const createQuiz = quiz => async dispatch => {
    const res = await jwtFetch(`/api/quizzes/create`, {
        method: "POST",
        body: JSON.stringify(quiz)
      });

      if (res.ok) {
        const quiz = await res.json();
        dispatch(receiveQuiz(quiz));
        return res
    }
}

const quizzesReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_QUIZZES:
            return { ...action.quizzes };
        case RECEIVE_QUIZ:
            // nextState[action.quiz._id] = action.quiz
            // return nextState;
            return { ...action.quiz}
        default:
            return state;
    }
}

export default quizzesReducer