import React, { Component } from 'react';
import GameRoomComponent from "./gameRoomComponent";
import { connect } from "react-redux";
import { initializeGame, getAvailableGames } from "../../redux/actions/action";
import { Redirect } from "react-router-dom";

class GameRoomContainer extends Component {
  componentDidMount() {
    this.props.getAvailableGames();
  }
  handleCreate = () => {
    this.props.initializeGame();
    this.props.getAvailableGames();
  }
  render() {
    return (
      this.props.joinedGame ?
      <Redirect to="/trivia" /> :
      <GameRoomComponent handleCreate={this.handleCreate} games={this.props.availableGames} currentGame={this.props.currentGame}/>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { initializeGame, getAvailableGames })(GameRoomContainer);