import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer'

var Layout = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = Layout;
