import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signup: true
		};
	}

	handleSignin(e) {
		console.log('handling sign in ', e);
	}

	updateState(e) {
		e.preventDefault();
		this.setState({signup: !this.state.signup});
	}

	render() {
		return (
			<form className="login center">
	        	<input name="email" type="email" placeholder="email" />
	        	<input name="password" type="password" placeholder="Password" />
				<button onClick={this.handleSignin.bind(this)} className="btn btn-primary">Sign {this.state.signup ? 'up' : 'in'}</button>
				<br />
				<div> {this.state.signup ? 'Already' : 'Not'} a member? <a onClick={this.updateState.bind(this)}> Sign {this.state.signup ? 'in' : 'up'}</a> </div>
	        </form>
        )
	}
}

