import axios from "axios";

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
        axios.get(`https://qriusity.com/v1/questions?page=${Math.floor(Math.random() * 17904)}&limit=1`)
            .then((response) =>{
                dispatch(setQuestion(response.data[0]))
            })
            .catch((err) =>{
                console.log(err);
            })
    }
}



