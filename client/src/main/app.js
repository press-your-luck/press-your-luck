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
      <div>
      <div className="site-wrapper container">
        
        <div className="row">
        <Switch>
          <Route exact path="/" render={(props)=>{
                       return  isAuthenticated ?
                        <Redirect to= "/gameroom"/> :
                        <SignUpContainer {...props}/> 
          }} />
          <ProtectedRoute path="/gameroom" component={GameRoomContainer} />
          <ProtectedRoute path="/trivia" component={TriviaContainer} />
        </Switch>
      </div>
        
    </div>
   <div>
   <PCContainer />
    </div>  
    </div>
  );
  }
}

const mapStateToProps = function(state){
  return state
}

export default withRouter(connect(mapStateToProps, { verifyToken })(App));