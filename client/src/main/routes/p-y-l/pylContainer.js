import React, { Component } from 'react';
import PylComponent from "./pylComponent";
import BoardOn from "./BoardOn";
import { connect } from "react-redux";
import { addMoney, whammy, useSpin, addSpin } from "../../redux/actions/action";
import WOW from "wowjs";
import Sound from "react-sound";


class PylContainer extends Component {
  componentWillMount() {
    document.getElementById("trivia").id = "board";
    new WOW.WOW().init();
  }

  constructor() {
    super()
    this.stopAndStart = null;
    this.squareChange = null;
    let whammyImg = Math.floor(Math.random() * 2);
    const tv = require("../../../images/4KTV.png"); 1250, 1,2, 3
    const fourSeventy = require("../../../images/470bucks.png"); 1, 2, 3
    const fivehundredandSpin = require("../../../images/500andspin.png"); 1, 2, 3
    const fivetwentyfive = require("../../../images/525bucks.png"); 1, 2, 3
    const sevenfourty = require("../../../images/740bucks.png"); 1, 2, 3
    const sevenfifty = require("../../../images/750bucks.png"); 1, 2, 3
    const sevenfiftyRed = require("../../../images/750bucksred.png"); 1, 2, 3
    const fifteenhundred = require("../../../images/1500bucks.png"); 1, 2
    const twoThousand = require("../../../images/2000bucks.png"); 1, 2, 3
    const twoThousandGreen = require("../../../images/2000bucksgreen.png");
    const fiveThousand = require("../../../images/5000bucks.png"); 1, 2, 3
    const addAone = require ("../../../images/AddaOne.png"); 500, 1, 2, 3
    const bigBucks = require("../../../images/bigbucks.png"); 5000, 1, 2, 3
    const whammyOne = require("../../../images/whammy1.png"); 1,1, 2,2, 3, 3
    const whammyTwo = require("../../../images/whammy2.png"); 1,1, 2, 2,3
    const whammyThree = require("../../../images/whammy3.png"); 1,1, 2, 2, 3
    this.state = {
      selector: [[5000, 1250, "whammy"], ["whammy", 5000, 750], [1500, "whammy", 740], [470, 750, "whammy"], [2000, "whammy", 525], [525, 500, "whammy"], [750, "whammy", 5000], ["whammy", 470, 500], ["whammy", 500, 1250], [750, "whammy", 5000], [5000, 5000, "whammy"], ["whammy", 2000, 500], ["whammy", 750, 2000], [500, "whammy", 750], [500, 1500, "whammy"], ["whammy", 740, 470], [740, 525, "whammy"], [1250, "whammy", 1500]],
      boardOn: false,
      boardSound: Sound.status.STOPPED,
      randomNum: null,
      imgRandom: 1,
      choice: null,
      whammies: 0,
      whammySound: Sound.status.STOPPED,
      whammyDisplay: false,
      whammyImg: ["https://i.pinimg.com/originals/ff/f4/6d/fff46d47a2753801ac4ce778745f4f25.png", "http://www.playpressyourluck.com/assets/mayorWhammy.png"],
      topRow0: [fiveThousand, tv, whammyTwo],
      topRow1: [whammyThree, bigBucks, sevenfifty],
      topRow2: [fifteenhundred, whammyThree, sevenfourty],
      topRow3: [fourSeventy, sevenfiftyRed, whammyOne],
      topRow4: [twoThousand, whammyTwo, fivetwentyfive],
      topRow5: [fivetwentyfive, addAone, whammyThree],
      secondRow6: [sevenfifty, whammyOne, bigBucks],
      secondRow7: [whammyTwo, fourSeventy, addAone],
      middleRow8: [whammyOne, fivehundredandSpin, tv],
      middleRow9: [sevenfiftyRed, whammyThree, fiveThousand],
      fourthRow10: [bigBucks, fiveThousand, whammyOne],
      fourthRow11: [whammyThree, twoThousand, fivehundredandSpin],
      bottomRow12: [whammyTwo, sevenfifty, twoThousand],
      bottomRow13: [addAone, whammyOne, sevenfiftyRed],
      bottomRow14: [fivehundredandSpin, fifteenhundred, whammyTwo],
      bottomRow15: [whammyOne, sevenfourty, fourSeventy],
      bottomRow16: [sevenfourty, fivetwentyfive, whammyThree],
      bottomRow17: [tv, whammyTwo, fifteenhundred]
    }
  }

  handleSquareChange = () => {
    this.setState((prevState)=>{
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
      this.squareChange = setInterval(() => { this.handleSquareChange() }, 1000)
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
          choice: prevState.selector[prevState.randomNum][prevState.imgRandom]
        }
      })
      if (this.state.choice !== "whammy") {
        this.props.addMoney(this.state.choice);
      } else {
        this.props.whammy();
        this.setState((prevState) => {
          return {
            whammies: prevState.whammies + 1,
            whammySound: Sound.status.PLAYING,
            whammyDisplay: true
          }
        })
      }
    }
    this.props.useSpin()
  }

  render() {
    return (
      <div className="container wow slideInDown">
        <PylComponent handleBoardStop={this.handleBoardStop} {...this.state} />
        <div className="centerConsole">
          <img onClick={this.handleBoardStart} className="logo" src={require("../../../images/board.jpg")} alt="" />
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

export default connect(mapStateToProps, { addMoney, whammy, useSpin, addSpin })(PylContainer);