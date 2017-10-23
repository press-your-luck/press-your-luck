import React, { Component } from 'react';
import GameRoomComponent from "./gameRoomComponent";
import { connect } from "react-redux";
import { initializeGame, getAvailableGames } from "../../redux/actions/action";
import { Redirect } from "react-router-dom";
import Sound from "react-sound";
import Theme from "../../theme-song/Theme.js"

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
          {/* <Sound url={require("../../theme-song/Game Show Music - Press Your Luck Opening Theme (1983-1986).mp3")} playFromPosition={5000 /* in milliseconds */} playStatus={Sound.status.PLAYING} /> */}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { initializeGame, getAvailableGames })(GameRoomContainer);