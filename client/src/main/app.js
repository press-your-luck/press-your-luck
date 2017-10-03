import React, { Component } from 'react';
import PCContainer from "./footer/player-console/PCContainer";
import TriviaContainer from "./routes/trivia/triviaContainer";
import GameRoomContainer from "./routes/gameroom/gameRoomContainer";
import SignUpContainer from "./routes/signin/SignUpContainer";
import ProtectedRoute from "./routes/ProtectedRoute.js";

import { Route, withRouter, Switch } from "react-router-dom";
import { verifyToken } from "./redux/actions/action";
import { connect } from "react-redux";


class App extends Component {
  componentDidMount() {
    this.props.verifyToken();
  }
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={SignUpContainer} />
          <ProtectedRoute path="/gameroom" component={GameRoomContainer} />
          <ProtectedRoute path="/trivia" component={TriviaContainer} />
        </Switch>
        <PCContainer />
      </div>
    );
  }
}

export default withRouter(connect(null, { verifyToken })(App));