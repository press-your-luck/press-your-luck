import React, { Component } from 'react';
import TriviaComponent from "./triviaComponent";
import { loadQuestion, addSpin, useChoice } from "../../redux/actions/action.js";
import { connect } from "react-redux";

class TriviaContainer extends Component {
  componentWillMount() {
    this.props.loadQuestion();
  }
  
  handleRoundChange(){
    if (this.props.player1.playerReady){
      this.props.loadQuestion();
    }
  }
  
  handleAnswer = (e) => {
    if (this.props.player1.choice == 1) {
      if (e.target.name == this.props.currentQuestion.answers) {
        alert("correct answer! 1 spin awarded!")
        this.props.addSpin();
        this.props.useChoice();
        this.handleRoundChange();
      } else {
        console.log("wrong answer!")
        this.props.useChoice();
        this.handleRoundChange();
      }
    }
    else {
      alert("you have no more choices")
    }
  }

  render() {
    return (
      <TriviaComponent handleAnswer={this.handleAnswer} question={this.props.currentQuestion} />
    );
  }
}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { loadQuestion, addSpin, useChoice })(TriviaContainer);