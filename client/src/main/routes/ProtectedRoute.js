import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    let Component = this.props.component;
    let path = this.props.path;
    return (
      <div>
        <Route path={path} render={(props)=>{
          return this.props.isAuthenticated ? 
          <Component {...props} /> :
          <Redirect to="/" />
          }}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {})(ProtectedRoute);