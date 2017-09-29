import React, { Component } from 'react';
import TriviaComponent from "./triviaComponent";
import { loadQuestion, addSpin, useChoice } from "../../redux/actions/action.js";
import { connect } from "react-redux";

class TriviaContainer extends Component {
  componentWillMount() {
    this.props.loadQuestion()
  }
  handleChoice = (e) => {
    this.setState({
      currentChoice: e.target.name
    })
  }
  handleAnswer = (e) => {
    if (this.props.player1.choice == 1) {
      if (e.target.name == this.props.currentQuestion.answers) {
        this.props.addSpin();
        this.props.useChoice();
      } else {
        console.log("wrong answer!")
        this.props.useChoice();
      }
    }
    else {
      alert("you have no more choices")
    }
  }

  render() {
    console.log(this.props.player1.choice)
    console.log(this.props.player1.spins)
    return (
      <TriviaComponent handleAnswer={this.handleAnswer} question={this.props.currentQuestion} />
    );
  }
}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { loadQuestion, addSpin, useChoice })(TriviaContainer);