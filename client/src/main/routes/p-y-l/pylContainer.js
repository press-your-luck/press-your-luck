import React, { Component } from 'react';
import PylComponent from "./pylComponent"
import WOW from "wowjs"

class PylContainer extends Component {
  componentWillMount() {
    document.getElementById("body").id = "board";
    new WOW.WOW().init()

  }

  constructor() {
    super()
    this.stopAndStart = null;
    this.state = {
      selector: [false, false, false, false, false],
      boardOn: false,
    }
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
      <div className="container wow slideInUp">
        <PylComponent handleBoardStop={this.handleBoardStop} {...this.state} />
        <div className="centerConsole">
          <img onClick={this.handleBoardStart} className="logo" src={require("../../../images/board.jpg")} alt="" />
        </div>
      </div>
    );
  }
}

export default PylContainer;