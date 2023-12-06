import jwtFetch from './jwt';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const history={}
const RECEIVE_QUIZZES = 'quizzes/RECEIVE_QUIZZES';
const RECEIVE_QUIZ = 'quizzes/RECEIVE_QUIZ';
const LOADING_QUIZ = 'quizzes/LOADING_QUIZ';

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

export const updateQuiz = (quizId, response) => async dispatch => {
    const res = await jwtFetch(`/api/quizzes/${quizId}`, {
        method: "PATCH",
        body: JSON.stringify(response)
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
            return { ...action.quizzes.quizzes };
        case RECEIVE_QUIZ:

            return { ...nextState, ...action.quiz.quizzes }
        default:
            return state;
    }
}

export default quizzesReducer