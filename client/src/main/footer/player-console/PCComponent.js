import React, { Component } from 'react';

class PCComponent extends Component {
  render() {
    return (
    <div className="player-console col-xs-12">
        <h1>Player: {this.props.user.username}</h1>
        <p>Spins: {this.props.spins}</p>
      </div>
    
    );
  }
}

export default PCComponent;