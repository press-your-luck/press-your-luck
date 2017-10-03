import React, { Component } from 'react';
import SignUpContainer from "../signin/SignUpContainer.js";

class GameRoomComponent extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-mid-12">
          <div className="row">
            <div className="col-md-6">
              <h1>Player One</h1>
              <SignUpContainer />
              <h1>Player Two</h1>
              <h1>Player Three</h1>
            </div>
            <div className="col-md-6">
              <button>Create Game</button>
              <button>Join Game</button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <button>Ready To Play</button>
        </div>

      </div>
    );
  }
}

export default GameRoomComponent;