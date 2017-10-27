import React, { Component } from 'react';
import TriviaComponent from "./triviaComponent";
import PylContainer from "../p-y-l/pylContainer";
import { loadQuestion, triviaAddSpin, useChoice, nextQuestion, resetChoice, buzzInAudio, boardAddSpin } from "../../redux/actions/action.js";
import { connect } from "react-redux";
import WOW from "wowjs";
import Sound from "react-sound";

class TriviaContainer extends Component {
  constructor() {
    super()
    this.bestAnswer = null;
    this.timer = null;
    this.state = {
      timeLeft: 5,
      
    }
  }
  componentDidMount() {
    document.body.id = "trivia";
    new WOW.WOW().init();
    this.handleTime()
  }

  handleClock = () => {
    if (this.state.timeLeft === 0){
      clearInterval(this.timer)
    } else {
    this.setState((prevState) =>{
      return {
        timeLeft: prevState.timeLeft - 1
      }
    })
  }
}

  handleTime = () => {
    clearTimeout(this.bestanswer);
    clearInterval(this.timer);
    this.timer = setInterval(() => {this.handleClock()}, 1000)
  }
  
  handleAnswer = (e) => {
    if (this.props.choice === 1) {
      if (e.target.name == this.props.currentGame.currentQuestion.answers) {
        if (this.state.timeLeft > 0){
          alert("correct answer! You answered in time! 3 spins awarded!")
          this.props.triviaAddSpin();
          this.props.useChoice();
          this.props.nextQuestion(this.props.currentGame._id);
        } else {
          alert("correct answer!  You get a spin!")
          this.props.boardAddSpin();
          this.props.useChoice();
          this.props.nextQuestion(this.props.currentGame._id);
        }
      } else {
        let answerArray = [this.props.currentGame.currentQuestion.option1, this.props.currentGame.currentQuestion.option2, this.props.currentGame.currentQuestion.option3, this.props.currentGame.currentQuestion.option4];
        alert(`WRONG! SAD! The Correct Answer Is: ${answerArray[this.props.currentGame.currentQuestion.answers - 1]}`);
        this.props.useChoice();
        this.props.nextQuestion(this.props.currentGame._id);
      }
    }
    else {
      alert("you have no more choices")
    }
  }
  
  handleNextQuestion = () => {
    clearInterval(this.timer)
    this.props.resetChoice();
    this.resetTimer();
    this.handleTime();
    
  }

  // resetBonus = () => {
  //   this.setState({
  //     bonus: true
  //   })
  // }

  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({
      timeLeft: this.state.timeLeft = 5
    })
  }

  render() {
    return (
      this.props.questionCount <= 4 ?
        this.props.choice === 0 ?
          <div className="next-question wow slideInRight">
            <h3 className="ready wow slideInRight" onClick={this.handleNextQuestion}>Ready For The Next Round?</h3>
          </div> :
          <div>
            <TriviaComponent
              handleAnswer={this.handleAnswer}
              currentQuestion={this.props.currentGame.currentQuestion}
              gameSounds={this.props.gameSounds}
              {...this.state} />
          </div> :
        <PylContainer />
    );
  }
}



const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { loadQuestion, triviaAddSpin, useChoice, nextQuestion, resetChoice, buzzInAudio, boardAddSpin })(TriviaContainer);