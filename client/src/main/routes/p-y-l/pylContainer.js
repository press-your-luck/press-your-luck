import React, { Component } from 'react';
import PylComponent from "./pylComponent";
import { connect } from "react-redux";
import { addMoney, whammy, useSpin, boardAddSpin, specialSquare, passSpins } from "../../redux/actions/action";
import WOW from "wowjs";
import Sound from "react-sound";
import ThanksForPlaying from "../thanks-for-playing/thanks-for-playing.js"


class PylContainer extends Component {
  componentWillMount() {
    document.getElementById("trivia").id = "board";
    new WOW.WOW().init();
  }
  constructor() {
    super()
    this.stopAndStart = null;
    this.squareChange = null;
    const tv = require("../../../images/4KTV.png");
    const fourSeventy = require("../../../images/470bucks.png");
    const fivehundredandSpin = require("../../../images/500andspin.png");
    const fivetwentyfive = require("../../../images/525bucks.png");
    const sevenfourty = require("../../../images/740bucks.png");
    const sevenfifty = require("../../../images/750bucks.png");
    const sevenfiftyRed = require("../../../images/750bucksred.png");
    const fifteenhundred = require("../../../images/1500bucks.png");
    const twoThousand = require("../../../images/2000bucks.png");
    const fiveThousand = require("../../../images/5000bucks.png");
    const addAone = require("../../../images/AddaOne.png");
    const bigBucks = require("../../../images/bigbucks.png");
    const whammyOne = require("../../../images/whammy1.png");
    const whammyTwo = require("../../../images/whammy2.png");
    const whammyThree = require("../../../images/whammy3.png");
    const boyBandWhammies = require("../../../images/boybandwhammies.png");
    const umpireWhammy = require("../../../images/umpirewhammy.png")
    const oragamiWhammy = require("../../../images/oragamiwhammy.png")
    const waterSkiWhammy = require("../../../images/waterskiwhammy.png");
    const dianaRossWhammy = require("../../../images/dianarosswhammy.png");
    this.state = {
      selector: [[5000, 1250, "whammy"], ["whammy", 5000, 750], [1500, "whammy", 740], [470, 750, "whammy"], [2000, "whammy", 525], [525, "add-a-one", "whammy"], [750, "whammy", 5000], ["whammy", 470, "add-a-one"], ["whammy", "500", 1250], [750, "whammy", 5000], [5000, 5000, "whammy"], ["whammy", 2000, "500"], ["whammy", 750, 2000], ["add-a-one", "whammy", 750], ["500", 1500, "whammy"], ["whammy", 740, 470], [740, 525, "whammy"], [1250, "whammy", 1500]],
      boardOn: false,
      boardSound: Sound.status.STOPPED,
      randomNum: null,
      imgRandom: 1,
      choice: null,
      whammies: 0,
      whammySound: Sound.status.STOPPED,
      whammyDisplay: false,
      whammyImg: ["https://i.pinimg.com/originals/ff/f4/6d/fff46d47a2753801ac4ce778745f4f25.png", "http://www.playpressyourluck.com/assets/mayorWhammy.png", "http://www.playpressyourluck.com/assets/boxerWhammy.png", boyBandWhammies, umpireWhammy, oragamiWhammy, waterSkiWhammy, dianaRossWhammy],
      rowImages: [[fiveThousand, tv, whammyTwo], [whammyThree, bigBucks, sevenfifty], [fifteenhundred, whammyThree, sevenfourty], [fourSeventy, sevenfiftyRed, whammyOne], [twoThousand, whammyTwo, fivetwentyfive], [fivetwentyfive, addAone, whammyThree], [sevenfifty, whammyOne, bigBucks], [whammyTwo, fourSeventy, addAone], [whammyOne, fivehundredandSpin, tv], [sevenfiftyRed, whammyThree, fiveThousand], [bigBucks, fiveThousand, whammyOne], [whammyThree, twoThousand, fivehundredandSpin], [whammyTwo, sevenfifty, twoThousand], [addAone, whammyOne, sevenfiftyRed], [fivehundredandSpin, fifteenhundred, whammyTwo], [whammyOne, sevenfourty, fourSeventy], [sevenfourty, fivetwentyfive, whammyThree], [tv, whammyTwo, fifteenhundred]],
    }
  }

  handleSquareChange = () => {
    this.setState((prevState) => {
      let randomNumber = Math.floor(Math.random() * 3);
      while (randomNumber === prevState.imgRandom) {
        randomNumber = Math.floor(Math.random() * 3);
      }
      return {
        ...this.state,
        imgRandom: randomNumber
      }
    })
  }

  handleSpin = () => {
    this.setState((prevState) => {
      let randomNumber = Math.floor(Math.random() * this.state.selector.length);
      while (randomNumber === prevState.randomNum) {
        randomNumber = Math.floor(Math.random() * this.state.selector.length);
      }
      return {
        ...this.state,
        randomNum: randomNumber
      }
    })
  }

  resetWhammy = () => {
    this.setState({
      whammySound: Sound.status.STOPPED,
      whammyDisplay: false
    })
  }

  handleBoardStart = () => {
    if (this.state.boardOn === false && this.props.player.spins > 0) {
      clearInterval(this.stopAndStart);
      clearInterval(this.squareChange);
      this.stopAndStart = setInterval(() => { this.handleSpin() }, 150)
      this.squareChange = setInterval(() => { this.handleSquareChange() }, 250)
      this.setState({
        ...this.state,
        boardOn: true,
        boardSound: Sound.status.PLAYING
      })
    } else {
      alert("That's all the time we have! Thanks for playing Press Your Luck!!")
    }
  }

  handleBoardStop = (e) => {
    e.preventDefault();
    if (this.state.boardOn === true) {
      clearInterval(this.stopAndStart);
      clearInterval(this.squareChange);
      this.setState((prevState) => {
        return {
          ...prevState,
          boardSound: Sound.status.PAUSED,
          boardOn: false,
          choice: prevState.selector[this.state.randomNum][this.state.imgRandom]
        }
      })
      if (this.state.choice === "whammy") {
        this.props.whammy();
        this.setState((prevState) => {
          return {
            whammies: prevState.whammies + 1,
            whammySound: Sound.status.PLAYING,
            whammyDisplay: true
          }
        })
      } else if (this.state.choice === "add-a-one") {
        this.props.specialSquare(this.props.player.money);
      } else if (this.state.choice === "500") {
        let backToNumber = parseInt(this.state.choice);
        this.props.boardAddSpin();
        this.props.addMoney(backToNumber);
        alert("ADDITIONAL SPIN ADDED!")
      } else {
        this.props.addMoney(this.state.choice);
      }
      this.props.useSpin()
    }
  }

  render() {
    return (
      this.props.player.spins === 0 ?
      <ThanksForPlaying/> :
      <div className="container wow slideInDown">
        <PylComponent handleBoardStop={this.handleBoardStop} {...this.state} />
        <div className="centerConsole">
          <img className="logo" src={require("../../../images/board.jpg")} alt="" />
          <div onClick={this.handleBoardStart} className={this.state.boardOn || this.state.whammyDisplay ? "spin-or-pass-hide" : "press-my-luck"}><span className="choice">SPIN!</span></div>
          <div onClick={this.props.passSpins} className={this.state.boardOn || this.state.whammyDisplay ? "spin-or-pass-hide" : "pass-spins"}><span className="choice">PASS!</span></div>
          <img className={this.state.whammyDisplay ? "mayor-whammy-show wow slideOutLeft" : "mayor-whammy-none"} src={this.state.whammyImg[Math.floor(Math.random() * this.state.whammyImg.length)]} alt="" />
        </div>
        <div>
          <Sound url="http://www.qwizx.com/gssfx/usa/pylbord2.wav" playStatus={this.state.boardSound} />
          <Sound url="http://www.qwizx.com/gssfx/usa/pyl-whammy.wav" playStatus={this.state.whammySound} onFinishedPlaying={this.resetWhammy} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { addMoney, whammy, useSpin, boardAddSpin, specialSquare, passSpins })(PylContainer);