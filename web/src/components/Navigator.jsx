import React from 'react';

// Style
import './Navigator.css';

export default class Navigator extends React.Component {
  render() {
    return (
      <nav className="navigator">
        <i className="fa fa-3x fa-bars"></i>
        { this.props.children }
      </nav>
    )
  }
}
