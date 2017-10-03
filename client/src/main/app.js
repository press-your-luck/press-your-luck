import React, { Component } from 'react';
import PCContainer from "./footer/player-console/PCContainer";
import TriviaContainer from "./routes/trivia/triviaContainer";
import GameRoomContainer from "./routes/gameroom/gameRoomContainer";


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <GameRoomContainer />
      </div>
    );
  }
}

export default App;