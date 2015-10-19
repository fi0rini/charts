'use strict';

define(['react', 'datasets'], function (React, DataSets) {
	console.log(DataSets);
	var HelloWorld = React.createClass({
		displayName: 'HelloWorld',

		render: function render() {
			return React.createElement(
				'p',
				null,
				'  '
			);
		}
	});
});