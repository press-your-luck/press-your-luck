import React, { Component } from 'react';

class GameItemComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.game._id}</p>
        <div onClick={()=>{this.props.handleGameChoice(this.props.game._id)}}>Join Game</div>
      </div>
    );
  }
}

export default GameItemComponent;