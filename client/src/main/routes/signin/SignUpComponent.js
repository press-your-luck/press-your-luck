import React, { Component } from 'react';

class SignUpComponent extends Component {
  render() {
    return (
       <div>
       
                <form onSubmit={this.props.handleSubmit}>
                <button  className="create-account" type="submit">CREATE ACCOUNT</button>
                    <input className="sign-in" onChange={this.props.handleChange}
                        value={this.props.inputs.username}
                        name="username"
                        type="text"
                        placeholder="username" />
                    <input className="sign-in"  onChange={this.props.handleChange}
                        value={this.props.inputs.password}
                        name="password"
                        type="password"
                        placeholder="password" />
                    <input className="sign-in"  onChange={this.props.handleChange}
                        value={this.props.inputs.email}
                        name="email"
                        type="text"
                        placeholder="email" />
                    
                </form>
            </div>
    );
  }
}

export default SignUpComponent;