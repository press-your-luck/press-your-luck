import React, { Component } from 'react';
import TriviaComponent from "./triviaComponent";
import PylContainer from "../p-y-l/pylContainer";
import { loadQuestion, addSpin, useChoice, nextQuestion, resetChoice } from "../../redux/actions/action.js";
import { connect } from "react-redux";
import WOW from "wowjs";
import Sound from "react-sound";
import BuzzIn from "../trivia/trivia-sounds/Buzz-In.js";

class TriviaContainer extends Component {
  constructor() {
    super()
    this.state = {
      playStatus: Sound.status.PAUSED
    }
  }

  componentDidMount() {
    document.getElementById("body").id = "trivia";
    new WOW.WOW().init()
  }
  handleAnswer = (e) => {
    if (this.props.choice === 1) {
      this.setState((prevState) => {
        return {
          playStatus: Sound.status.PLAYING
        }
      })
      if (e.target.name == this.props.currentGame.currentQuestion.answers) {
        alert("correct answer! 1 spin awarded!")
        this.props.addSpin();
        this.props.useChoice();
        this.props.nextQuestion(this.props.currentGame._id)
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
    this.props.resetChoice();
  }

  render() {
    return (
      this.props.questionCount <= 4 ?
        this.props.choice === 0 ?
          <div className="next-question wow slideInRight">
            <h3 className="ready" onClick={this.handleNextQuestion}>Ready For The Next Round?</h3>
          </div> :
          <div>
            <TriviaComponent
              handleAnswer={this.handleAnswer}
              currentQuestion={this.props.currentGame.currentQuestion}
              {...this.state} />
          </div> :
        <PylContainer />
    );
  }
}



const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { loadQuestion, addSpin, useChoice, nextQuestion, resetChoice })(TriviaContainer);