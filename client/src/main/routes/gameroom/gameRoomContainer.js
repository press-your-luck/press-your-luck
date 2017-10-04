import React, { Component } from 'react';
import GameRoomComponent from "./gameRoomComponent";
import GameItemContainer from "./Game/GameItemContainer";
import { connect } from "react-redux";
import { initializeGame, getAvailableGames } from "../../redux/actions/action";

class GameRoomContainer extends Component {
  componentDidMount() {
    this.props.getAvailableGames();
  }
  handleCreate = () => {
    this.props.initializeGame()
  }
  render() {
    console.log(this.props.availableGames);
    return (
      <GameRoomComponent handleCreate={this.handleCreate} games={this.props.availableGames} currentGame={this.props.currentGame}/>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { initializeGame, getAvailableGames })(GameRoomContainer);