'use strict';
define(['react'], function (React) {
	return React.createClass({
		render: function () {
			return (
				<form className="credentials">
                    <input name="email" type="email" placeholder="email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit" class="btn btn-primary marg_top_15">Login</button>
                </form>
			);
		}
	});
});