import React, { Component } from 'react';
import WOW from "wowjs"
import Sound from "react-sound";


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
      <div className="bonus-box"><p className="bonus"> bonus </p>
      <div className="col-xs-1 timer"><img className={this.props.timeLeft > 0 ? "red-x-hide" : "red-x-show" } src="http://www.clker.com/cliparts/0/7/e/a/12074327311562940906milker_X_icon.svg.hi.png" alt=""/><span className={this.props.timeLeft > 0 ? "timer-show" : "timer-hide"}>{this.props.timeLeft}</span></div>
      <Sound url={this.props.gameSounds.buzzIn.url} playStatus={this.props.gameSounds.muted ? Sound.status.STOPPED : this.props.gameSounds.buzzIn.status} />
      </div>
    </div>

    );
  }
}

export default TriviaComponent;