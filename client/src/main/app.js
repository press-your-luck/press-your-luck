import React, { Component } from 'react';
import PCContainer from "./footer/player-console/PCContainer";
import TriviaContainer from "./routes/trivia/triviaContainer";
import GameRoomContainer from "./routes/gameroom/gameRoomContainer";
import SignUpContainer from "./routes/signin/SignUpContainer";
import ProtectedRoute from "./routes/ProtectedRoute.js";

import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { verifyToken } from "./redux/actions/action";
import { connect } from "react-redux";


class App extends Component {
  componentDidMount() {
    this.props.verifyToken();
  }
  render() {
    const isAuthenticated = this.props.isAuthenticated
    return (
      <div className="site-wrapper container-fluid">
        <div className="row contentRow">
          <Switch>
            <Route exact path="/" render={(props) => {
              return isAuthenticated ?
                <Redirect to="/gameroom" /> :
                <SignUpContainer {...props} />
            }} />
            <ProtectedRoute path="/gameroom" component={GameRoomContainer} />
            <ProtectedRoute path="/trivia" component={TriviaContainer} />
          </Switch>
        </div>
        <div className="row footer-row">
          <div className="player-console col-xs-8 col-xs-offset-2" >
            <PCContainer />
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = function (state) {
  return state
}

export default withRouter(connect(mapStateToProps, { verifyToken })(App));