let defaultState = {
    isAuthenticated : false,
    user : {
        email: "",
        username: "",
        _id: "",
        admin: false
    },
    authError : {
        signup: "",
        login: "",
        verify: ""
    },
    users: [],
    player : {
        spins: 0,        
        playerReady: false
        },
    choice: 1,
    currentGame: {
        currentQuestion: {
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answers: 0
        },
        playerIDs: []
    },
    availableGames: [],
    joinedGame: false

}


export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_QUESTION": {
            return { player1:{ ...state.player1, playerReady: false, choice: 1 }, currentQuestion: action.question,  }
        }
        case "ADD_SPIN": {
            return {...state, player1: { ...state.player1, spins: state.player1.spins + 1}}
        }
        case "USE_CHOICE" : {
            return {...state, player1: { ...state.player1, choice: state.player1.choice - 1, 
                playerReady: true}}
        }
        case "AUTHENTICATE" : {
             return {
                ...state,
                isAuthenticated: action.isValid,
                user: action.user,
                authError: { ...state.authError}
             }
        }
        case "AUTH_ERROR":
            return {
               ...state,
                authError: {
                    ...state.authError,
                    ...action.err
            }
        }
        case "SET_GAME":
            return {
                ...state,
                currentGame: action.game.data
            }
        case "LOAD_AVAILABLE_GAMES":
            return {
                ...state,
                availableGames: action.games
            }
        case "CHOOSE_GAME":
            return {
                ...state,
                currentGame: action.game
            }
        case "JOINED_GAME_BOOLEAN":
            return {
                ...state,
                joinedGame: !defaultState.joinedGame
            }
        default:
            return state
    }
}



