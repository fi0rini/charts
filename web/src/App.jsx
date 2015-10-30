import React, { Component } from 'react';

// Footer component
import Navigator from './components/Navigator.jsx';
import Footer from './components/Footer.jsx';

export default class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  render() {
    return (
      <div>
        <Navigator authenticated={this.state.authenticated}>
          <Item name="Item 1" />
          <Item name="Item 2" />
          <Item name="Item 3">
            <Item name="Sub Item 1" />
          </Item>
        </Navigator>
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
