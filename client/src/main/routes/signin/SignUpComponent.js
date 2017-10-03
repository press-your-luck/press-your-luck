import React, { Component } from 'react';

class SignUpComponent extends Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <input onChange={this.props.handleChange} 
          value={this.props.inputs.username} 
          name="username" 
          type="text" 
          placeholder="username"  />
        <input onChange={this.props.handleChange} 
          value={this.props.inputs.password}  
          name="password" 
          type="password" 
          placeholder="password" />
        <input onChange={this.props.handleChange} 
          value={this.props.inputs.email}  
          name="email" 
          type="text" 
          placeholder="email"  />
        <button type="submit">CREATE ACCOUNT</button>
      </form>
      </div>
    );
  }
}

export default SignUpComponent;