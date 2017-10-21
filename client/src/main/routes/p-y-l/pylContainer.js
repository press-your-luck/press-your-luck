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
    this.state = {
      selector: [5000, "whammy", 1500, 470, 2000, 525, 750, "whammy", "whammy", 750, 5000, "whammy", "whammy", 450, 500, "whammy", 740, 1250],
      boardOn: false,
      playStatus: Sound.status.STOPPED,
      randomNum: null,
      choice: null
    }
  }

  handleMoney = () => {
    this.setState((prevState) => {
      return {
        money: this.state.money + 1500
      }
    })
    console.log(this.state.money)
  }


  handleSpin = () => {
    this.setState((prevState) => {
      let randomNumber = Math.floor(Math.random() * this.state.selector.length);
      while (randomNumber === prevState.randomNum) {
        randomNumber = Math.floor(Math.random() * this.state.selector.length);
      }
      console.log(prevState.randomNum)
      return {
        ...this.state,
        randomNum: randomNumber
      }
    })
  }

  handleBoardStart = () => {
    if (this.state.boardOn === false && this.props.player.spins > 0) {
      clearInterval(this.stopAndStart)
      this.stopAndStart = setInterval(() => { this.handleSpin() }, 100)
      this.setState({
        ...this.state,
        boardOn: true,
        playStatus: Sound.status.PLAYING
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
          playStatus: Sound.status.PAUSED,
          boardOn: false,
          choice: prevState.selector[prevState.randomNum]
        }
      })
      if (this.state.choice !== "whammy") this.props.addMoney(this.state.choice);
      else this.props.whammy();
    }
    this.props.useSpin()
  }

  render() {
    return (
      <div className="container wow slideInDown">
        <PylComponent handleMoney={this.handleMoney} handleBoardStop={this.handleBoardStop} {...this.state} />
        <div className="centerConsole">
          <img onClick={this.handleBoardStart} className="logo" src={require("../../../images/board.jpg")} alt="" />
        </div>
        <div className={this.state.boardOn ? "audioBoardOn" : "audioBoardOff"}>
          <Sound url="http://www.qwizx.com/gssfx/usa/pylbord2.wav" playStatus={this.state.playStatus}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return state
}

export default connect(mapStateToProps, { addMoney, whammy, useSpin, addSpin })(PylContainer);