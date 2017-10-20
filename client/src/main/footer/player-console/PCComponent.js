import React, { Component } from 'react';
import WOW from "wowjs"

class PCComponent extends Component {
  render() {
    return (
      <div className="wow slideInUp">
        <h1 className="player">Player: {this.props.user.username}</h1>
        <span className="spin-count">Spins: {this.props.spins}</span>
        <span className="spin-count">Cash: {this.props.money}</span>
      </div>

    );
  }
}

export default PCComponent;