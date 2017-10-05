import React, { Component } from 'react';

class TriviaComponent extends Component {
  render() {
    return (
      <div>
         <p> {this.props.currentQuestion.question} </p>
        <button onClick={this.props.handleAnswer} name="1">{this.props.currentQuestion.option1}</button>
        <button onClick={this.props.handleAnswer} name="2">{this.props.currentQuestion.option2}</button>
        <button onClick={this.props.handleAnswer} name="3">{this.props.currentQuestion.option3}</button>
        <button onClick={this.props.handleAnswer} name="4">{this.props.currentQuestion.option4}</button>
      </div>
    );
  }
}

export default TriviaComponent;