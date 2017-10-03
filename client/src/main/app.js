import React, { Component } from 'react';
import PCContainer from "./footer/player-console/PCContainer";
import TriviaContainer from "./routes/trivia/triviaContainer";
import GameRoomContainer from "./routes/gameroom/gameRoomContainer";
import SignUpContainer from "./routes/signin/SignUpContainer";
import ProtectedRoute from "./routes/ProtectedRoute.js";

import { Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={SignUpContainer}/>
          <ProtectedRoute path="/gameroom" component={GameRoomContainer}/>

        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, { verifyToken })(App));