import React, { Component } from 'react';
import PylComponent from "./pylComponent"
import WOW from "wowjs"

class PylContainer extends Component {
  componentWillMount() {
    document.getElementById("trivia").id = "board";
    new WOW.WOW().init()

  }

  constructor() {
    super()
    this.stopAndStart = null;
    this.state = {
      selector: [1500, "whammy", false, false, false],
      boardOn: false,
      money: 0
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
    let randomNumber = [Math.floor(Math.random() * this.state.selector.length)];
    this.setState(() => {
      let select = [false, false, false, false, false];
      select[randomNumber] = !select[randomNumber]
      return {
        selector: select
      }
    })
  }

  handleBoardStart = () => {
    if (this.state.boardOn === false) {
      clearInterval(this.stopAndStart)
      this.stopAndStart = setInterval(() => { this.handleSpin() }, 50)
      this.setState({
        ...this.state,
        boardOn: true
      })
    }
  }

  handleBoardStop = () => {
    if (this.state.boardOn === true) {
      clearInterval(this.stopAndStart)
      this.setState({
        ...this.state,
        boardOn: false
      })
    }
  }

  render() {
    return (
      <div className="container wow slideInDown">
        <PylComponent handleMoney={this.handleMoney} handleBoardStop={this.handleBoardStop} {...this.state} />
        <div className="centerConsole">
          <img onClick={this.handleBoardStart} className="logo" src={require("../../../images/board.jpg")} alt="" />
        </div>
      </div>
    );
  }
}

export default PylContainer;