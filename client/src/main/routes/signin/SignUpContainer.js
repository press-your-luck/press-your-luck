import React, { Component } from 'react';
import SignUpComponent from "./SignUpComponent.js";
import LoginContainer from "../login/LoginContainer";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/action";
import { Redirect } from "react-router-dom";

class SignUpContainer extends Component {
  constructor() {
    super()
    this.state = {
      inputs: {
        username: "",
        password: "",
        email: ""
      }
    }
  }
  handleChange = (e) => {
    e.persist();
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [e.target.name]: e.target.value
        }
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state.inputs);
  }


  render() {
    return (
        this.props.isAuthenticated ?
        <Redirect to="/gameroom" /> :
        <div>
        <SignUpComponent 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          {...this.state} />
          <LoginContainer />
          </div>
    );
  }
}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { signup })(SignUpContainer)