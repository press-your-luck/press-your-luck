import Sound from "react-sound";

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
        playerReady: false,
        additionalSpins: 0
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
        playerIDs: [],
    },
    gameId: "",
    availableGames: [],
    joinedGame: false,
    questionCount: 1, 
    gameSounds: {
        muted: true,
        boardActive: {
            url: "http://www.qwizx.com/gssfx/usa/pylbord2.wav",
            status: Sound.status.STOPPED
        },
        whammyChosen: {
            url: "http://www.qwizx.com/gssfx/usa/pyl-whammy.wav",
            status: Sound.status.STOPPED
        },
        buzzIn: {
            url: "http://www.qwizx.com/gssfx/usa/pyl-buzz-in.wav",
            status: Sound.status.STOPPED
        }
    }

}


export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "TRIVIA_ADD_SPIN": {
            return {
                ...state, 
                player: { ...state.player, 
                spins: state.player.spins + 3}
            }
        }
        case "BOARD_ADD_SPIN": {
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
        case "PASS_SPINS": {
            return {
                ...state,
                player: {
                    ...state.player,
                    spins: state.player.spins = 0
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
        case "GAME_ID":
            return {
                ...state,
                gameId: action.id
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
                    money: state.player.money + action.money
                }
            }
        case "ADD_A_ONE": {
            return {
                ...state,
                player: {...state.player,
                    money: action.money 
                }
            }
        }
        case "WHAMMY":
            return {
                ...state,
                player: { ...state.player,
                    money: 0
                }
            }
        case "MUTE_CONTROL":
            return {
                ...state,
                gameSounds: {
                    ...state.gameSounds,
                    muted: !state.gameSounds.muted,
                }
            }
        case "BUZZ_IN_AUDIO":
            return {
                ...state,
                gameSounds: {
                    ...state.gameSounds,
                    buzzIn: {
                        ...state.gameSounds.buzzIn,
                        status: Sound.status.PLAYING
                    }
                }
            }
        case "GAME_RESET":
            return {
                ...state,
                player : {
                    money: 0,
                    spins: 0,        
                    playerReady: false,
                    additionalSpins: 0
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
                    playerIDs: [],
                },
                gameId: "",
                joinedGame: false,
                questionCount: 1, 
                gameSounds: {
                    muted: true,
                    boardActive: {
                        url: "http://www.qwizx.com/gssfx/usa/pylbord2.wav",
                        status: Sound.status.STOPPED
                    },
                    whammyChosen: {
                        url: "http://www.qwizx.com/gssfx/usa/pyl-whammy.wav",
                        status: Sound.status.STOPPED
                    },
                    buzzIn: {
                        url: "http://www.qwizx.com/gssfx/usa/pyl-buzz-in.wav",
                        status: Sound.status.STOPPED
                    }
                }
            }
        case "RESET_JOIN_GAME_BOOLEAN":
            return {
                ...state,
                joinedGame: false
            }
        default:
            return state
    }
}



