// main entry point for application
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, NoMatch} from 'react-router';

import App from './App.jsx';
import Home from './pages/HomePage.jsx';

// global style
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

const Landing = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

ReactDOM.render((
   <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById("app"))