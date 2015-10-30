import React from 'react';
import {Link} from 'react-router';

// Footer style
import './Footer.css';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="center">
		  	<div>
					Charts - Created by <a href="http://www.nickfiorini.com"> Nick Fiorini </a> - 2015 <i className="fa fa-copyright"></i> All rights reserved
				</div>
				<ul className="links">
		    	<li><Link to='/about'>About</Link></li>
					<li><Link to='/info'> Info </Link></li>
					<li><Link to='/contact'> Contact us </Link></li>
				</ul>
			</footer>
		)
	}
}
