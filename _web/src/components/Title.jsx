import React from 'react';

// style import
import './Title.css';

const Title = React.createClass ({
	render() {
		return (
			<div className='title'>
			    <h1 className='center huge-font'> Charts Updated! </h1>
			    <h2 className="center sub-title">
			        <small>a</small> HUGE <small>ems system for the cloud</small>
			        <i className="cloud fa fa-cloud fa-lg"></i>
			    </h2>
			</div>
		);
	}
});

export default Title;
