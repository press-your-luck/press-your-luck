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
        case "ADD_SPIN": {
            return {
                ...state, 
                player: { ...state.player, 
                spins: state.player.spins + 1}
            }
        }
        case "USE_CHOICE" : {
            return {
                ...state, 
                choice: state.choice - 1, 
                playerReady: true
                }
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
                currentGame: action.game
            }
        case "LOAD_AVAILABLE_GAMES":
            return {
                ...state,
                availableGames: action.games
            }
        case "JOINED_GAME_BOOLEAN":
            return {
                ...state,
                joinedGame: !defaultState.joinedGame
            }
        case "RESET_CHOICE":
            return {
                ...state,
                choice: defaultState.choice
            }
        default:
            return state
    }
}



