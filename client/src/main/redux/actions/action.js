import axios from "axios";
const authUrl = "http://localhost:9000/auth/"

export function addSpin(){
    return {
        type: "ADD_SPIN"
    }
}

export function authErr(){
    return {
        type: "AUTH_ERROR"
    }
}

export function useChoice(){
    return {
        type: "USE_CHOICE"
    }
}

export function setQuestion(question){
    return {
        type: "SET_QUESTION",
        question
    }
}

export function loadQuestion(){
    return (dispatch) =>{
        axios.get(`https://qriusity.com/v1/questions?page=${Math.floor(Math.random() * 17904)}&limit=1`)
            .then((response) =>{
                dispatch(setQuestion(response.data[0]))
            })
            .catch((err) =>{
                console.log(err);
            })
    }
}

export function authenticate(isValid, user){
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}

export function signup(credentials){
    return (dispatch) =>{
        axios.post(authUrl + "signup", credentials)
            .then((response) =>{
                let token = response.data.token;
                localStorage.setItem("token", token);
                let user = response.data.user;
                let isValid = response.data.success
                dispatch(authenticate(isValid, user));
            })
    }
}



