import React from 'react';

// style import
import './Title.css';

export default class Title extends React.Component {
	render() {
		return (
			<div className='title-tile'>
			    <h1 className='center huge-font'> Charts </h1>
			    <h2 className="center sub-title"> 
			        <small>a</small> HUGE <small>ems system for the cloud</small>
			        <i className="cloud fa fa-cloud fa-lg"></i>
			    </h2>
			</div>
		);
	}
}