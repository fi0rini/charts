// react
import React from 'react';

// components
import Title from '../components/Title.jsx';
import Login from '../containers/Login.jsx';

// style
import './Home.css';

const Home = React.createClass({
	render() {
		return (
			<div>
	      <Login />
	    </div>
		)
	}
});

export default Home;
