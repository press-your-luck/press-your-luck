import React, { Component } from 'react';

class SignUpComponent extends Component {
  render() {
    return (
       <div>
            <span className="sign-up-header">Sign Up!</span>
                <form onSubmit={this.props.handleSubmit}>
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
                    <button  className="create-account" type="submit">CREATE ACCOUNT</button>
                </form>
            </div>
    );
  }
}

export default SignUpComponent;