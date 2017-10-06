import axios from "axios";

axios.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config
}, (err) => {
    return Promise.reject(err)
})

const authUrl = "http://localhost:9000/auth/";
const profileUrl = "http://localhost:9000/player/";
const gameUrl = "http://localhost:9000/game/";

export function verifyToken() {
    return (dispatch) => {
        axios.get(profileUrl + "verify")
            .then((response) => {
                let user = response.data.user;
                let isValid = response.data.success;
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({ verify: "Invalid Token" }));
            })
    }
}

export function authenticate(isValid, user) {
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}

export function authError() {
    return {
        type: "AUTH_ERROR"
    }
}

export function addSpin() {
    return {
        type: "ADD_SPIN"
    }
}

export function useChoice() {
    return {
        type: "USE_CHOICE"
    }
}

export function setQuestion(question) {
    return {
        type: "SET_QUESTION",
        question
    }
}

export function setGame(game) {
    return {
        type: "SET_GAME",
        game
    }
}

export function loadAvailableGames(games) {
    return {
        type: "LOAD_AVAILABLE_GAMES",
        games
    }
}

export function chooseGame(game) {
    return {
        type: "CHOOSE_GAME",
        game
    }
}

//this initiates the switch from the gameroom to the trivia, might need a less confusing name.
export function joinedGameBoolean() {
    return {
        type: "JOINED_GAME_BOOLEAN",
    }
}

export function loadGame(gameId){
    return (dispatch) => {
        axios.get(gameUrl + gameId)
            .then((response) => {
                dispatch(setGame(response.data.game))
            })
            .catch((err) =>{
                console.error(err);
            })
    }
}

export function loadQuestion(gameID) {
    // return (dispatch) => {
        return axios.put(gameUrl + "startTrivia/" + gameID)
            .then((response) => {
                return response.data.game
            })
            .catch((err) => {
                console.error(err);
            })
    // }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "signup", credentials)
            .then((response) => {
                let token = response.data.token;
                localStorage.setItem("token", token);
                let user = response.data.user;
                let isValid = response.data.success
                dispatch(authenticate(isValid, user));
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "login", credentials)
            .then((response) => {
                let token = response.data.token;
                localStorage.setItem("token", token);
                let user = response.data.user;
                let isValid = response.data.success
                dispatch(authenticate(isValid, user));
            })
    }
}

//passed and called in GameRoomContainer
export function initializeGame() {
    return (dispatch)=>{
        axios.post(gameUrl + "initialize")
            .then((response)=>{
                dispatch(getAvailableGames())
            })
            .catch((err)=>{
                console.error(err)
            })
    }
}

//passed and called in GameRoomContainer in componentdidmount + handleCreate
export function getAvailableGames () {
    return (dispatch)=>{
        axios.get(gameUrl + `?gameAvailable=true`)
            .then((response)=>{
                dispatch(loadAvailableGames(response.data.games))
            })
            .catch((err)=>{
                console.error(err)
            })
    }
}

export function joinGame(gameId) {
    return (dispatch)=>[
        axios.put(gameUrl + "join/" + gameId)
            .then((response)=>{
                loadQuestion(gameId).then((game)=>{
                    
                    dispatch(setGame(game));
                    dispatch(joinedGameBoolean());
                })
            })
            .catch((err)=>{
                console.error(err)
            })
    ]
}




