import React, { Component } from 'react';
import PylComponent from "./pylComponent"

class PylContainer extends Component {
  render() {
    return (
      <div className="container">
        <PylComponent />
        <div className="centerConsole">Press Your Luck!</div>
      </div>
    );
  }
}

export default PylContainer;