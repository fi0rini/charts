// react
import React from 'react';

// components
import Title from '../components/Title.jsx';
import Footer from '../components/Footer.jsx';
import Login from '../containers/Login.jsx';

// style
import './HomePage.css';

export default class HomePage extends React.Component {
	render() {
		return (
			<div> 
				<Title />
	      		<Login />
	      		<Footer />
	      	</div>
		)
	}
}
