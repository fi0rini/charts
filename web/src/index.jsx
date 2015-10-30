import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

// Main app container
import App from './App.jsx';

// Route handlers
import Home from './route-handlers/Home.jsx';
import About from './route-handlers/About.jsx';
import Info from './route-handlers/Info.jsx';

// Import global Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Global.css';

const MainRouter = React.createClass({
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="info" component={Info} />
        </Route>
      </Router>
    )
  }
});

ReactDOM.render(<MainRouter />, document.getElementById('App'));
