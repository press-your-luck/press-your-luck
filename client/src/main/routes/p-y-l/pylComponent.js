import React, { Component } from 'react';
import WOW from "wowjs"

class PylComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let soFocused = this.refs.focused.focus();
    new WOW.WOW().init()
  }
  render() {
    console.log(this.props.selector)
    return (
      <div onKeyPress={this.props.handleBoardStop} className="row game-board">
        <div className="row topRow">
          <button
            tabIndex="5"
            name="0"
            className="col-xs-2 money-one"
            ref={this.props.selector[0] ? "focused" : null} >
            <img className="whammy" src={require("../../../images/5000bucks.png")} alt="5000 bucks" />
          </button>
          <button
            tabIndex="2"
            name="1"
            className="col-xs-2 whammy-one"
            ref={this.props.selector[1] ? "focused" : null} >
            <img className="whammy" src={require("../../../images/whammy3.png")} alt="whammy" />
            Ï</button>
          <button
            tabIndex="11"
            name="2" className="col-xs-2"
            ref={this.props.selector[2] ? "focused" : null} >
            <img className="whammy" src={require("../../../images/1500bucks.png")} alt="5000 bucks" />
          </button>
          <button
            tabIndex="13"
            name="3"
            className="col-xs-2"
            ref={this.props.selector[3] ? "focused" : null} >
            <img className="whammy" src={require("../../../images/750bucksred.png")} alt="1500 bucks" />
          </button>
          <button
            tabIndex="7"
            name="4"
            className="col-xs-2"
            ref={this.props.selector[4] ? "focused" : null} >
            <img className="whammy" src={require("../../../images/740bucks.png")} alt="740 bucks" />
          </button>
          <button
            tabIndex="4"
            className="col-xs-2"
            ref={!this.props.boardOn ? "focused" : null}>
            <img className="whammy" src={require("../../../images/525bucks.png")} alt="525 bucks" />
          </button>
        </div>
        <div className="row secondRow">
          <button
            tabIndex="9"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/2000bucksgreen.png")} alt="2000 bucks" />
          </button>
          <button
            tabIndex="6"
            className="col-xs-2 col-xs-offset-8">
            <img className="whammy" src={require("../../../images/whammy2.png")} alt="whammy-two" />
          </button>
        </div>
        <div className="row middleRow">
          <button
            tabIndex="18"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/whammy1.png")} alt="2000 bucks red" />
          </button>
          <button
            tabIndex="17"
            className="col-xs-2 col-xs-offset-8">
            <img className="whammy" src={require("../../../images/2000bucks.png")} alt="2000 bucks" />
          </button>
        </div>
        <div className="row fourthRow">
          <button
            tabIndex="12"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/bigbucks.png")} alt="big bucks" />
          </button>
          <button
            tabIndex="14"
            className="col-xs-2 col-xs-offset-8">
            <img className="whammy" src={require("../../../images/whammy3.png")} alt="5000 bucks" />
          </button>
        </div>
        <div tabIndex="" className="row bottomRow">
          <button
            tabIndex="1"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/4KTV.png")} alt="5000 bucks" />
          </button>
          <button
            tabIndex="8"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/470bucks.png")} alt="5000 bucks" />
          </button>
          <button
            tabIndex="16"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/500andspin.png")} alt="5000 bucks" />
          </button>
          <button
            tabIndex="10"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/whammy1.png")} alt="5000 bucks" />
          </button>
          <button
            tabIndex="15"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/740bucks.png")} alt="5000 bucks" />
          </button>
          <button
            tabIndex="3"
            className="col-xs-2">
            <img className="whammy" src={require("../../../images/whammy2.png")} alt="5000 bucks" />
          </button>
        </div>
      </div>
    );
  }
}

export default PylComponent;