'use strict';
define(['react', 'react-dom'], function (React, ReactDOM) {
	
	var User = React.createClass({
		render: function () {
			return (
				<div className="user">
					<div className="id">{this.props.user.id}</div>
					<div className="name">{this.props.user.name}</div>
					<div className="ambulance">{this.props.user.ambulance}</div>
					<div className="age">{this.props.user.age}</div>
					<div className="email">{this.props.user.email}</div>
				</div>
			)
		}
	});

	var NavUI = React.createClass({
		render: function () {
			return (
				<div className="navui">
					<div className="ambulance-company">
						{this.props.ambulance}
					</div>
					<div className="user-name">
						{this.props.user}
					</div>
					<Tile title='My Info' />
					<Tile title="System" />
					<Tile title="Charts" />
					<Tile title="Stats" />
				</div>
			);
		}
	});

	var Tile = React.createClass({
		render: function () {
			return (
				<div className="tileBox">
					{this.props.title}
				</div>
			);
		}
	});

	ReactDOM.render(
		<User user={user}/>,
		document.getElementById('page')
	);
});