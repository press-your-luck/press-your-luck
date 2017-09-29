import React, { Component } from 'react';

class TriviaComponent extends Component {
  render() {
    return (
      <div>
        <p> {this.props.question.question} </p>
        <button onClick={this.props.handleAnswer} name="1">{this.props.question.option1}</button>
        <button onClick={this.props.handleAnswer} name="2">{this.props.question.option2}</button>
        <button onClick={this.props.handleAnswer} name="3">{this.props.question.option3}</button>
        <button onClick={this.props.handleAnswer} name="4">{this.props.question.option4}</button>
      </div>
    );
  }
}

export default TriviaComponent;