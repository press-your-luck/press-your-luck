import React, { Component } from 'react';
import WOW from "wowjs"

class TriviaComponent extends Component {
  componentDidMount () {
    new WOW.WOW().init()
}
  render() {
    return (
      <div>
        <div className="row">
          <div className="trivia-box col-xs-10 col-xs-offset-1 wow fadeInUp">
            <p className="question"> {this.props.currentQuestion.question} </p>
            <h4>Category: {this.props.currentQuestion.category.name}</h4>
          </div>
        </div>

      <div className="col-xs-8 col-xs-offset-2 options wow fadeInUp">
          <button className="answer col-xs-6 col-xs-offset-3 wow fadeInUp" onClick={this.props.handleAnswer} name="1">{this.props.currentQuestion.option1.toUpperCase()}</button>
          <button className="answer col-xs-6 col-xs-offset-3 wow fadeInUp" onClick={this.props.handleAnswer} name="2">{this.props.currentQuestion.option2.toUpperCase()}</button>
          <button className="answer col-xs-6 col-xs-offset-3 wow fadeInUp" onClick={this.props.handleAnswer} name="3">{this.props.currentQuestion.option3.toUpperCase()}</button>
          <button className="answer col-xs-6 col-xs-offset-3 wow fadeInUp" onClick={this.props.handleAnswer} name="4">{this.props.currentQuestion.option4.toUpperCase()}</button>
      </div>
      
    </div>

    );
  }
}

export default TriviaComponent;