import React, { Component } from 'react';
import GameItemComponent from "./GameItemComponent";
import { connect } from "react-redux";
import { joinGame, joinedGameBoolean, loadQuestion } from "../../../redux/actions/action";

class GameItemContainer extends Component {
  handleGameChoice = (id) => {
    this.props.joinGame(id);
    this.props.loadQuestion(id)
    this.props.joinedGameBoolean();
  }
  render() {
    return (
        <GameItemComponent game={this.props.game} handleGameChoice={this.handleGameChoice}/>
    );
  }
}


export default connect(null, { joinGame, joinedGameBoolean, loadQuestion })(GameItemContainer);