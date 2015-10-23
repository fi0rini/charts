'use strict';
define(['react', 'react-dom'], function (React, ReactDOM) {

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
		<Tile title="I am a title box" />,
		document.getElementById('page')
	);
});