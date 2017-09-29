let defaultState = {
    currentQuestion: {},
    player1 : {
        spins: 0,
        choice: 1        
        }
}


export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_QUESTION": {
            return { ...state, currentQuestion: action.question,  }
        }
        case "ADD_SPIN": {
            return {...state, player1: { spins: state.player1.spins + 1}}
        }
        case "USE_CHOICE" : {
            return {...state, player1: { choice: state.player1.choice - 1}}
        }
        default:
            return state
    }
}



