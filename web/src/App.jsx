import React from 'react';

// homepage
import HomePage from './pages/HomePage.jsx';

// components
import Title from '../components/Title.jsx';
import Footer from '../components/Footer.jsx';
import Login from '../containers/Login.jsx';


export default class App extends React.Component {
  render() {
    return (
      <HomePage>
      	<Title />
      	<Login />
      	<Footer />
      </HomePage>
    )
  }
}