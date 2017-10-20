import React, { Component } from 'react';
import WOW from "wowjs"

class PylComponent extends Component {
  constructor(props) {
    super(props);
  }
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
              tabIndex="5"
              name="0"
              className="col-xs-2 money-one"
              value="5000"
              id={this.props.randomNum === 0 ? "focused" : null} >
              <img className="whammy" src={require("../../../images/5000bucks.png")} alt="5000 bucks" />
            </button>
            <button
              tabIndex="2"
              name="1"
              value="whammy"
              className="col-xs-2 whammy-one"
              id={this.props.randomNum === 1 ? "focused" : null} >
              <img className="whammy" src={require("../../../images/whammy3.png")} alt="whammy" />
              Ï</button>
            <button
              tabIndex="11"
              name="2"
              className="col-xs-2"
              value="1500"
              id={this.props.randomNum === 2 ? "focused" : null}
              onKeyPress={this.props.handleMoney} >
              <img className="whammy" src={require("../../../images/1500bucks.png")} alt="5000 bucks" />
            </button>
            <button
              tabIndex="13"
              name="3"
              className="col-xs-2"
              value="470"
              id={this.props.randomNum === 3 ? "focused" : null} >
              <img className="whammy" src={require("../../../images/470bucks.png")} alt="1500 bucks" />
            </button>
            <button
              tabIndex="7"
              name="4"
              className="col-xs-2"
              value="2000"
              id={this.props.randomNum === 4 ? "focused" : null} >
              <img className="whammy" src={require("../../../images/2000bucks.png")} alt="740 bucks" />
            </button>
            <button
              tabIndex="4"
              name="5"
              className="col-xs-2"
              value="525"
              id={this.props.randomNum === 5 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/525bucks.png")} alt="525 bucks" />
            </button>
          </div>
          <div className="row secondRow">
            <button
              tabIndex="9"
              name="6"
              className="col-xs-2"
              value="750"
              id={this.props.randomNum === 6 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/750bucks.png")} alt="750 bucks" />
            </button>
            <button
              tabIndex="6"
              name="7"
              className="col-xs-2 col-xs-offset-8"
              value="whammy"
              id={this.props.randomNum === 7 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/whammy2.png")} alt="whammy-two" />
            </button>
          </div>
          <div className="row middleRow">
            <button
              tabIndex="18"
              name="8"
              className="col-xs-2"
              value="whammy"
              id={this.props.randomNum === 8 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/whammy1.png")} alt="whammy red" />
            </button>
            <button
              tabIndex="17"
              name="9"
              className="col-xs-2 col-xs-offset-8"
              value="750"
              id={this.props.randomNum === 9 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/750bucks.png")} alt="750 bucks" />
            </button>
          </div>
          <div className="row fourthRow">
            <button
              tabIndex="12"
              name="10"
              className="col-xs-2"
              value="5000"
              id={this.props.randomNum === 10 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/bigbucks.png")} alt="big bucks" />
            </button>
            <button
              tabIndex="14"
              name="11"
              className="col-xs-2 col-xs-offset-8"
              value="whammy"
              id={this.props.randomNum === 11 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/whammy3.png")} alt="whammy" />
            </button>
          </div>
          <div tabIndex="" className="row bottomRow">
            <button
              tabIndex="3"
              name="12"
              className="col-xs-2"
              value="whammy"
              id={this.props.randomNum === 12 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/whammy2.png")} alt="whammy" />
            </button>
            <button
              tabIndex="8"
              name="13"
              className="col-xs-2"
              value="500"
              id={this.props.randomNum === 13 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/AddaOne.png")} alt="500 bucks" />
            </button>
            <button
              tabIndex="16"
              name="14"
              className="col-xs-2"
              value="500"
              id={this.props.randomNum === 14 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/500andspin.png")} alt="500 bucks" />
            </button>
            <button
              tabIndex="10"
              name="15"
              className="col-xs-2"
              value="whammy"
              id={this.props.randomNum === 15 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/whammy1.png")} alt="whammy" />
            </button>
            <button
              tabIndex="15"
              name="16"
              className="col-xs-2"
              value="740"
              id={this.props.randomNum === 16 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/740bucks.png")} alt="740 bucks" />
            </button>
            <button
              tabIndex="1"
              name="17"
              className="col-xs-2"
              value="1250"
              id={this.props.randomNum === 17 ? "focused" : null}>
              <img className="whammy" src={require("../../../images/4KTV.png")} alt="1250 bucks" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PylComponent;