import React, { Component } from 'react';
import GameRoomComponent from "./gameRoomComponent";
import { connect } from "react-redux";
import { initializeGame, getAvailableGames } from "../../redux/actions/action";
import { Redirect } from "react-router-dom";
import Sound from "react-sound";

class GameRoomContainer extends Component {
  componentWillMount() {
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
        <div>
          <GameRoomComponent handleCreate={this.handleCreate} games={this.props.availableGames} currentGame={this.props.currentGame} />
          <Sound url={require("../../../Theme/Game Show Music - Press Your Luck Opening Theme (1983-1986).mp3")} playFromPosition={5000} playStatus={this.props.gameSounds.muted ? Sound.status.PAUSED : Sound.status.PLAYING} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { initializeGame, getAvailableGames })(GameRoomContainer);