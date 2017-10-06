import React, { Component } from 'react';

class PCComponent extends Component {
  render() {
    return (
      <div className="player-console col-xs-12">
        <h1>Player: {this.props.player.username}</h1>
        <p>Spins: {this.props.player.spins}</p>
      </div>
    );
  }
}

export default PCComponent;