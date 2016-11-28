import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer'
import Content from './Content'

var Layout = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </div>
    );
  }
});

module.exports = Layout;
