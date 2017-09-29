let defaultState = {
    currentQuestion: {}
}


export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_QUESTION": {
            return { ...state, currentQuestion: action.question }
        }
        default:
            return state
    }
}



