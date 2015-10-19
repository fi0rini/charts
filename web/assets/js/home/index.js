'use strict';
define(['react', 'react-dom'], function (React, ReactDOM) {

	var user = {
		id: "001121",
		name: "Joe Schmoe",
		ambulance: "Some Company",
		age: "50",
		email: "myemail@gmail.com"
		// add more information evenutally
	};

	var User = React.createClass({
		displayName: 'User',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'user' },
				React.createElement(
					'div',
					{ className: 'id' },
					this.props.user.id
				),
				React.createElement(
					'div',
					{ className: 'name' },
					this.props.user.name
				),
				React.createElement(
					'div',
					{ className: 'ambulance' },
					this.props.user.ambulance
				),
				React.createElement(
					'div',
					{ className: 'age' },
					this.props.user.age
				),
				React.createElement(
					'div',
					{ className: 'email' },
					this.props.user.email
				)
			);
		}
	});

	var NavUI = React.createClass({
		displayName: 'NavUI',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'navui' },
				React.createElement(
					'div',
					{ className: 'ambulance-company' },
					this.props.ambulance
				),
				React.createElement(
					'div',
					{ className: 'user-name' },
					this.props.user
				),
				React.createElement(Tile, { title: 'My Info' }),
				React.createElement(Tile, { title: 'System' }),
				React.createElement(Tile, { title: 'Charts' }),
				React.createElement(Tile, { title: 'Stats' })
			);
		}
	});

	var Tile = React.createClass({
		displayName: 'Tile',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'tileBox' },
				this.props.title
			);
		}
	});

	ReactDOM.render(React.createElement(User, { user: user }), document.getElementById('page'));
});