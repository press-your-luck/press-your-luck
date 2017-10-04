import React, { Component } from 'react';
import LoginComponent from "./LoginComponent.js";
import { login } from "../../redux/actions/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {
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
        this.props.login(this.state.inputs);
      }
    
    
    render() {
        return (
            <LoginComponent 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
            authMsg={this.props.authError.login} 
            {...this.state} />
        );
    }
}

const mapStateToProps = function(state){
    return state
}

export default connect(mapStateToProps, { login })(LoginContainer);