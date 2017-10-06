import React, { Component } from 'react';

class GameItemComponent extends Component {
  render() {
    return (
      <div className="available-rooms">
        <div className="joinButton" onClick={()=>{this.props.handleGameChoice(this.props.game._id)}}>Join Game</div>
      </div>
    );
  }
}

export default GameItemComponent;