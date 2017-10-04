import React, { Component } from 'react';
import GameRoomComponent from "./gameRoomComponent";
import { connect } from "react-redux";
import { initializeGame } from "../../redux/actions/action";

class GameRoomContainer extends Component {
  handleCreate = () => {
    this.props.initializeGame()
  }
  render() {
    return (
      <GameRoomComponent handleCreate={this.handleCreate} currentGame={this.props.currentGame}/>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { initializeGame })(GameRoomContainer);