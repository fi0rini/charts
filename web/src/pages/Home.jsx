// react
import React from 'react';

// components
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';

export default class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<Title/>
				<Button />
				<Button />
				<Footer />
			</div>
		)
	}
}
