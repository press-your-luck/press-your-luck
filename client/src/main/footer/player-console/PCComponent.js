import React, { Component } from 'react';

class PCComponent extends Component {
  render() {
    return (
      <div>
        <h1>Player: {this.props.user.username}</h1>
        <span>Spins: {this.props.spins}</span>
      </div>

    );
  }
}

export default PCComponent;