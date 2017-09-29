import React, { Component } from 'react';
import PCContainer from "./footer/player-console/PCContainer";
import TriviaContainer from "./routes/trivia/triviaContainer"


class App extends Component {
  render() {
    return (
      <div>
        <TriviaContainer />
      </div>
    );
  }
}

export default App;