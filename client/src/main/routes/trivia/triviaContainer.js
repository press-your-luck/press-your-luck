import React, { Component } from 'react';
import TriviaComponent from "./triviaComponent";
import { loadQuestion, addSpin, useChoice } from "../../redux/actions/action.js";
import { connect } from "react-redux";

class TriviaContainer extends Component {
  componentWillMount() {
    // this.props.loadQuestion(this.props.currentGame._id);
  }
  
  // handleRoundChange(){
  //     this.props.loadQuestion();
  // }
  
  handleAnswer = (e) => {
    if (this.props.choice === 1) {
      if (e.target.name == this.props.currentGame.currentQuestion.answers) {
        alert("correct answer! 1 spin awarded!")
        this.props.addSpin();
        this.props.useChoice();
        // this.handleRoundChange();
      } else {
        alert("wrong answer!");
        this.props.useChoice();
        // this.handleRoundChange();
      }
    }
    else {
      alert("you have no more choices")
    }
  }

  render() {
    return (
      <TriviaComponent handleAnswer={this.handleAnswer} currentQuestion={this.props.currentGame.currentQuestion} />
    );
  }
}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { loadQuestion, addSpin, useChoice })(TriviaContainer);