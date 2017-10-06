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
    const answerArray = [this.props.currentGame.currentQuestion.option1, this.props.currentGame.currentQuestion.option2, this.props.currentGame.currentQuestion.option3, this.props.currentGame.currentQuestion.option4];
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