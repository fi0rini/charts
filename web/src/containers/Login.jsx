import React from 'react';

// components
export default class Login extends React.Component {
	render() {
		return <form className="login">
        	<input name="email" type="email" placeholder="email" />
        	<input name="password" type="password" placeholder="Password" />
			<button onClick={this.handleSignin} className="btn btn-primary">Sign {this.state.signup ? 'up' : 'in'}</button>
			<br />
			<div> already a member? <span className="link"> Sign in </span> </div>
        </form>
	}
}

