import React from 'react';

export default class Button extends React.Component {
	render() {
		var className = 'btn btn-' + this.props.type;
		return (
			<button className={className}> {this.props.text} </button>
		)
	}
}