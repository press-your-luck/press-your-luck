import axios from "axios";
const selectQuestion = Math.floor(Math.random() * 17904)
const triviaUrl = `https://qriusity.com/v1/questions?page=${selectQuestion}&limit=1`

export function addSpin(){
    return {
        type: "ADD_SPIN"
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
        axios.get(triviaUrl)
            .then((response) =>{
                console.log(response);
                dispatch(setQuestion(response.data[0]))
            })
            .catch((err) =>{
                console.log(err);
            })
    }
}



