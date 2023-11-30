const TOGGLE = 'loading/TOGGLE'

export const toggle = () => {
    return {
        type: TOGGLE,
    }
}

const loadingReducer = (state = false, action) => {

    switch (action.type) {
        case TOGGLE:
            return !state
        default:
            return state
    }
}

export default loadingReducer
