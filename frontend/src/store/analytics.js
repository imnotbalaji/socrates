import jwtFetch from "./jwt";

const RECEIVE_ANALYTICS = 'analytics/RECEIVE_ANALYTICS';

export const receiveAnalytics = analytics => {
    return {
        type: RECEIVE_ANALYTICS,
        analytics
    }
}

export const fetchAnalytics = userId => async dispatch => {
    const res = await jwtFetch(`/api/users/${userId}`);

    if (res.ok) {
        const analytics = await res.json();
        dispatch(receiveAnalytics(analytics));
    }
}

const analyticsReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch (action.type) {

        case RECEIVE_ANALYTICS:
            return { ...nextState, ...action.analytics }
        default:
            return state;
    }
}

export default analyticsReducer;