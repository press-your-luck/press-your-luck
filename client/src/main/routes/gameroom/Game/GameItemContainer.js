import React, { Component } from 'react';
import GameItemComponent from "./GameItemComponent";
import { connect } from "react-redux";
import { joinGame, joinedGame } from "../../../redux/actions/action";

class GameItemContainer extends Component {
  handleGameChoice = (id) => {
    this.props.joinGame(id);
    this.props.joinedGame();
  }
  render() {
    return (
        <GameItemComponent game={this.props.game} handleGameChoice={this.handleGameChoice}/>
    );
  }
}


export default connect(null, { joinGame, joinedGame })(GameItemContainer);