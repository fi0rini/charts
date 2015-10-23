'use strict';
define(['react'], function (React) {
	return React.createClass({
		render: function () {
			return (
				<footer className="m_top_50 center">
	                Charts - Created by <a href="http://www.nickfiorini.com"> Nick Fiorini </a> - 2015 
	                	<i className="fa fa-copyright"></i> All rights reserved 
	                	<br />
	                <div className="links">
	                    <a className="link" href="/about">About</a> 
	                    <a className="link" href="/info"> Info </a> 
	                    <a className="link" href="/contact"> Contact us </a>
	                </div>
	            </footer>
			);
		}
	});
});