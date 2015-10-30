import React from 'react';
import {Link} from 'react-router';

const Footer = React.createClass({
	render() {
		return (
			<footer className="m_top_50 center">
		  	<div>
					Charts - Created by <a href="http://www.nickfiorini.com"> Nick Fiorini </a> - 2015 <i className="fa fa-copyright"></i> All rights reserved
				</div>
				<br />
		    <div className="links">
		    	<li><Link to='/about'>About</Link></li>
					<li><Link to='/info'> Info </Link></li>
					<li><Link to='/contact'> Contact us </Link></li>
		    </div>
		  </footer>
		)
	}
});

export default Footer;
