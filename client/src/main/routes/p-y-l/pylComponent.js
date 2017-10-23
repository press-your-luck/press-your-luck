import React, { Component } from 'react';
import WOW from "wowjs"

class PylComponent extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    window.addEventListener("keydown", (e) => {
      if (e.which === 32) {
        this.props.handleBoardStop(e);
      }
    });
  }
  render() {
    return (
      <div className="row game-board">
        <form onSubmit={(e) => { this.props.handleBoardStop(e) }}>
          <div className="row topRow">
            <button
              name="0"
              className="col-xs-2 money-one"
              value="5000"
              id={this.props.randomNum === 0 ? "focused" : null} >
              <img className="whammy" src={`${this.props.rowImages[0][this.props.imgRandom]}`} alt="5000 bucks" />
            </button>
            <button
              name="1"
              value="whammy"
              className="col-xs-2 whammy-one"
              id={this.props.randomNum === 1 ? "focused" : null} >
              <img className="whammy" src={`${this.props.rowImages[1][this.props.imgRandom]}`} alt="whammy" />
              Ï</button>
            <button
              name="2"
              className="col-xs-2"
              value="1500"
              id={this.props.randomNum === 2 ? "focused" : null}
              onKeyPress={this.props.handleMoney} >
              <img className="whammy" src={`${this.props.rowImages[2][this.props.imgRandom]}`} alt="5000 bucks" />
            </button>
            <button
              name="3"
              className="col-xs-2"
              value="470"
              id={this.props.randomNum === 3 ? "focused" : null} >
              <img className="whammy" src={`${this.props.rowImages[3][this.props.imgRandom]}`} alt="1500 bucks" />
            </button>
            <button
              name="4"
              className="col-xs-2"
              value="2000"
              id={this.props.randomNum === 4 ? "focused" : null} >
              <img className="whammy" src={`${this.props.rowImages[4][this.props.imgRandom]}`} alt="740 bucks" />
            </button>
            <button
              name="5"
              className="col-xs-2"
              value="525"
              id={this.props.randomNum === 5 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[5][this.props.imgRandom]}`} alt="525 bucks" />
            </button>
          </div>
          <div className="row secondRow">
            <button
              name="6"
              className="col-xs-2"
              value="750"
              id={this.props.randomNum === 6 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[6][this.props.imgRandom]}`} alt="750 bucks" />
            </button>
            <button
              name="7"
              className="col-xs-2 col-xs-offset-8"
              value="whammy"
              id={this.props.randomNum === 7 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[7][this.props.imgRandom]}`} alt="whammy-two" />
            </button>
          </div>
          <div className="row middleRow">
            <button
              name="8"
              className="col-xs-2"
              value="whammy"
              id={this.props.randomNum === 8 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[8][this.props.imgRandom]}`} alt="whammy red" />
            </button>
            <button
              name="9"
              className="col-xs-2 col-xs-offset-8"
              value="750"
              id={this.props.randomNum === 9 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[9][this.props.imgRandom]}`} alt="750 bucks" />
            </button>
          </div>
          <div className="row fourthRow">
            <button
              name="10"
              className="col-xs-2"
              value="5000"
              id={this.props.randomNum === 10 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[10][this.props.imgRandom]}`} alt="big bucks" />
            </button>
            <button
              name="11"
              className="col-xs-2 col-xs-offset-8"
              value="whammy"
              id={this.props.randomNum === 11 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[11][this.props.imgRandom]}`} alt="whammy" />
            </button>
          </div>
          <div tabIndex="" className="row bottomRow">
            <button
              name="12"
              className="col-xs-2"
              value="whammy"
              id={this.props.randomNum === 12 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[12][this.props.imgRandom]}`} alt="whammy" />
            </button>
            <button
              name="13"
              className="col-xs-2"
              value="500"
              id={this.props.randomNum === 13 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[13][this.props.imgRandom]}`} alt="500 bucks" />
            </button>
            <button
              name="14"
              className="col-xs-2"
              value="500"
              id={this.props.randomNum === 14 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[14][this.props.imgRandom]}`} alt="500 bucks" />
            </button>
            <button
              name="15"
              className="col-xs-2"
              value="whammy"
              id={this.props.randomNum === 15 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[15][this.props.imgRandom]}`} alt="whammy" />
            </button>
            <button
              name="16"
              className="col-xs-2"
              value="740"
              id={this.props.randomNum === 16 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[16][this.props.imgRandom]}`} alt="740 bucks" />
            </button>
            <button
              name="17"
              className="col-xs-2"
              value="1250"
              id={this.props.randomNum === 17 ? "focused" : null}>
              <img className="whammy" src={`${this.props.rowImages[17][this.props.imgRandom]}`} alt="1250 bucks" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PylComponent;