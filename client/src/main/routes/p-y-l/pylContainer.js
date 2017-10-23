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
    let whammyImg = Math.floor(Math.random() * 2)
    this.state = {
      selector: [5000, "whammy", 1500, 470, 2000, 525, 750, "whammy", "whammy", 750, 5000, "whammy", "whammy", 450, 500, "whammy", 740, 1250],
      boardOn: false,
      boardSound: Sound.status.STOPPED,
      randomNum: null,
      choice: null,
      whammies: 0,
      whammySound: Sound.status.STOPPED,
      whammyDisplay: false,
      whammyImg: ["https://i.pinimg.com/originals/ff/f4/6d/fff46d47a2753801ac4ce778745f4f25.png", "http://www.playpressyourluck.com/assets/mayorWhammy.png"]

    }
  }

  handleSquareChange = () => {

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
      clearInterval(this.stopAndStart)
      this.stopAndStart = setInterval(() => { this.handleSpin() }, 150)
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
      clearInterval(this.stopAndStart)
      this.setState((prevState) => {
        return {
          ...prevState,
          boardSound: Sound.status.PAUSED,
          boardOn: false,
          choice: prevState.selector[prevState.randomNum]
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
        <PylComponent handleMoney={this.handleMoney} handleBoardStop={this.handleBoardStop} {...this.state} />
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