import React, { Component } from 'react';
import GameItemComponent from "./GameItemComponent";
import { connect } from "react-redux";
import { joinGame, loadQuestion, gameId } from "../../../redux/actions/action";

class GameItemContainer extends Component {
  handleGameChoice = (id) => {
    this.props.joinGame(id);
    this.props.gameId(id);
  }
  render() {
    return (
        <GameItemComponent game={this.props.game} handleGameChoice={this.handleGameChoice}/>
    );
  }
}

const mapStateToProps = function(state){
  return state
}


export default connect(mapStateToProps, { joinGame, loadQuestion, gameId })(GameItemContainer);