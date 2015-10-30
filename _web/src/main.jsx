// main entry point for application
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, NoMatch, IndexRoute} from 'react-router';

// Main application Route handler
import App from './App.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Info from './pages/Info.jsx';
import Contact from './pages/Contact.jsx';

// some styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style/global.css';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="info" component={Info} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById("app"))
