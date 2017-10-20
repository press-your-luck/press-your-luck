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
        money: 0,
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
    joinedGame: false,
    questionCount: 1

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
        case "USE_SPIN": {
            return {
                ...state,
                player: {
                    ...state.player,
                    spins: state.player.spins - 1
                }
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
        case "QUESTION_COUNT":
            return {
                ...state,
                questionCount: state.questionCount + 1
            }
        case "ADD_MONEY":
            return {
                ...state,
                player: { ...state.player, 
                    money: state.player.money + action.money}
            }
        case "WHAMMY":
            return {
                ...state,
                player: { ...state.player,
                    money: 0
                }
            }
        default:
            return state
    }
}



