import React, { Component } from 'react';
import GameItemContainer from "./Game/GameItemContainer";

class GameRoomComponent extends Component {
  genGames = () => {
    return this.props.games.map((game, index) => {
      return <GameItemContainer game={game} index={index} key={game._id} />
    })
  }
  render() {
    return (
            <div className="col-md-6">
              <button onClick={this.props.handleCreate}>Create Game</button>
              <h1>Available Games:</h1>
              <div>
                {this.genGames()}
              </div>
      </div>
    );
  }
}

export default GameRoomComponent;