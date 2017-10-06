import React, { Component } from 'react';

class LoginComponent extends Component {
    render() {
        return (
        <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input className="sign-in"  onChange={this.props.handleChange}
                        value={this.props.inputs.username}
                        name="username"
                        type="text"
                        placeholder="username" />
                    <input className="sign-in"  onChange={this.props.handleChange}
                        value={this.props.inputs.password}
                        name="password"
                        type="password"
                        placeholder="password" />
                    <button className="login" type="submit">Log In</button>
                </form>
                <div className="host">
                    <img className="peter-tomarken" src={require("../../../images/peter-tomarken.png")} alt="peter tomarken"/>
                    </div>
            </div>
        );
    }
}

export default LoginComponent;