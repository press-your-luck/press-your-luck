import React, { Component } from 'react';

class TriviaComponent extends Component {
  render() {
    console.log(this.props.currentQuestion)
    return (
      <div>
        <div className="row">
          <div className="trivia-box col-xs-10 col-xs-offset-1">
            <p className="question"> {this.props.currentQuestion.question} </p>
            <h4>Category: {this.props.currentQuestion.category.name}</h4>
          </div>
        </div>

      <div className="row options">
          <button className="answer col-xs-6 col-xs-offset-3" onClick={this.props.handleAnswer} name="1">{this.props.currentQuestion.option1}</button>
          <button className="answer col-xs-6 col-xs-offset-3" onClick={this.props.handleAnswer} name="2">{this.props.currentQuestion.option2}</button>
          <button className="answer col-xs-6 col-xs-offset-3" onClick={this.props.handleAnswer} name="3">{this.props.currentQuestion.option3}</button>
          <button className="answer col-xs-6 col-xs-offset-3" onClick={this.props.handleAnswer} name="4">{this.props.currentQuestion.option4}</button>
      </div>
      
    </div>

    );
  }
}

export default TriviaComponent;