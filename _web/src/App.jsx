import React from 'react';
import {Router, Route, Link} from 'react-router';

// components
import Title from './components/Title.jsx';
import Footer from './components/Footer.jsx';

const App = React.createClass({
  render() {
    return (
      <div>
        <Title />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

export default App;
