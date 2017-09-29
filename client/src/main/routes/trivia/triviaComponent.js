import React, { Component } from 'react';

class TriviaComponent extends Component {
  render() {
    return (
      <div>
        <p> {this.props.question.question} </p>
        <button>{this.props.question.question.option1}</button>
        <button>{this.props.question.question.option1}</button>
        <button>{this.props.question.question.option1}</button>
        <button>{this.props.question.question}</button>
      </div>
    );
  }
}

export default TriviaComponent;