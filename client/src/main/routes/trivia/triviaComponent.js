import React, { Component } from 'react';

class TriviaComponent extends Component {
  render() {
    return (
      <div>
        <p> {this.props.question.question} </p>
      </div>
    );
  }
}

export default TriviaComponent;