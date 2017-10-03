import React, { Component } from 'react';
import SignUpComponent from "./SignUpComponent.js"
import { connect } from "react-redux";
import { signup } from "../../redux/actions/action"

class SignUpContainer extends Component {
  constructor(){
    super()
    this.state = {
      inputs: {
            username: "",
            password: "",
            email: ""
        }
    }
}
  handleChange = (e) =>{
      e.persist();
      this.setState((prevState) =>{
          return {
              inputs: {
                ...prevState.inputs,
                [e.target.name] : e.target.value
              }
          }
      })
  }
  handleSubmit = (e) =>{
      e.preventDefault();
      this.props.signup(this.state.inputs);
  }  
  
  
  render() {
    return (
      <div>
        <SignUpComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange} {...this.state} />
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return state
}

export default connect(mapStateToProps, { signup })(SignUpContainer)