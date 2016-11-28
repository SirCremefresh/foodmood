import React from 'react';
import Navbar from './Navbar'

var Layout = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Layout;
