import React, { Component } from 'react';
import PylComponent from "./pylComponent"

class PylContainer extends Component {
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
      this.stopAndStart = setInterval(() => {this.handleSpin() }, 500)
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
      <div className="container">
        <PylComponent handleBoardStop={this.handleBoardStop} {...this.state} />
        <div className="centerConsole">
          <img onClick={this.handleBoardStart} className="logo" src={require("../../../images/board.jpg")} alt="" />
        </div>
      </div>
    );
  }
}

export default PylContainer;