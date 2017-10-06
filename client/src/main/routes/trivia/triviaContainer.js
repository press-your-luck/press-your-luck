import React, { Component } from 'react';
import TriviaComponent from "./triviaComponent";
import { loadQuestion, addSpin, useChoice, nextQuestion, resetChoice } from "../../redux/actions/action.js";
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
        this.props.nextQuestion(this.props.currentGame._id)
        // this.handleRoundChange();
      } else {
        alert("wrong answer!");
        this.props.useChoice();
        this.props.nextQuestion(this.props.currentGame._id);
        // this.handleRoundChange();
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
    console.log(this.props.player.spins)
    return (
      this.props.choice === 0 ? 
      <div>
        <h3 onClick={this.handleNextQuestion}>Ready For Next Question?</h3>
      </div> :
      <TriviaComponent 
        handleAnswer={this.handleAnswer} 
        currentQuestion={this.props.currentGame.currentQuestion} />
    );
  }
}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { loadQuestion, addSpin, useChoice, nextQuestion, resetChoice })(TriviaContainer);