import React, { Component } from 'react';
import WOW from "wowjs"

class PCComponent extends Component {
  render() {
    return (
      <div className="wow slideInUp">
        <h1 className="player">Player: {this.props.user.username}</h1>
        <span>Spins: {this.props.spins}</span>
      </div>

    );
  }
}

export default PCComponent;