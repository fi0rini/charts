import React from 'react';
import axios from 'axios';

// animation library
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// configuration options
import config from '../CONFIG.js';

// style
import './Login.css';

const Login = React.createClass({
	getInitialState() {
		return {
			signup: false
		};
	},

	componentDidMount() {

	},

	handlePrimaryClick(e) {
		let email = this._form[0].value;
		let password = this._form[1].value;

		e.preventDefault();

		if ( this.state.signup ) {
			console.log('signup');
		} else {
			this.signin({
				email: email,
				password: password
			});
		}
	},

	/**
	 *	display a second password
	 *	entry for the user to verify
	*/
	signup() {

	},

	signin(credentials) {
		axios.post(config.URL.login, credentials)
			.then( function (response) {
				console.log( response );
			})
			.catch( function (err) {
				console.log( err );
			})
	},

	updateState(e) {
		e.preventDefault();
		this.setState({signup: !this.state.signup});
	},

	render() {
		return (
			<form ref={ (form) => this._form = form }className="login center">
	        	<input name="email" type="email" placeholder="Email" />
	        	<input name="password" type="password" placeholder="Password" />
	        	<ReactCSSTransitionGroup transitionName="verification" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
	        		{	this.state.signup ?
	        			<input key="password-verification" id="password-verification" name="password-verification" type="password" placeholder="Retype Password" /> : null
	        		}
						</ReactCSSTransitionGroup>
						<button onClick={this.handlePrimaryClick} className="btn btn-primary">Sign {this.state.signup ? 'up' : 'in'}</button>
						<br />
						<div> {this.state.signup ? 'Already' : 'Not'} a member?
							<a onClick={this.updateState}>
								Sign {this.state.signup ? 'in' : 'up'}
							</a>
						</div>
	      </form>
        )
	}
});

export default Login;
