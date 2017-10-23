import React, { Component } from 'react';
import WOW from "wowjs"

class PCComponent extends Component {
  render() {
    return (
      
      <div className="console wow slideInUp">
      <h1 className="cash">   ${this.props.money}</h1>
        {/* <h1 className="player">Player: {this.props.user.username}</h1> */}
        <span className="spin-count">Spins: {this.props.spins}</span>

      </div>

    );
  }
}

export default PCComponent;