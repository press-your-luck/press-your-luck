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
            <div className="game-room">
              <h1 className="game-room-header">JOIN A GAME!</h1>
              <div>
              <button className="create-game" onClick={this.props.handleCreate}>Create Game</button>
                {this.genGames()}
              </div>
      </div>
    );
  }
}

export default GameRoomComponent;