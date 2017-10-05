import React, { Component } from 'react';

class LoginComponent extends Component {
    render() {
        return (
        <div>
            <span>Login</span>
                <form onSubmit={this.props.handleSubmit}>
                    <input onChange={this.props.handleChange}
                        value={this.props.inputs.username}
                        name="username"
                        type="text"
                        placeholder="username" />
                    <input onChange={this.props.handleChange}
                        value={this.props.inputs.password}
                        name="password"
                        type="password"
                        placeholder="password" />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;