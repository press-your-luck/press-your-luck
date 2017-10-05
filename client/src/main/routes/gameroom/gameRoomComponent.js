import React, { Component } from 'react';
import SignUpContainer from "../signin/SignUpContainer.js";
import GameItemContainer from "./Game/GameItemContainer";

class GameRoomComponent extends Component {
  genGames = () => {
    return this.props.games.map((game, index) => {
      return <GameItemContainer game={game} index={index} key={game._id} />
    })
  }
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
              <button onClick={this.props.handleCreate}>Create Game</button>
              <h1>Available Games:</h1>
              <div>
                {this.genGames()}
              </div>
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