import React, { Component } from 'react';

// Footer component
import Navigator from './components/Navigator.jsx';
import Footer from './components/Footer.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigator>
        </Navigator>
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
