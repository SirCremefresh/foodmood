import React from 'react';

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Content from './Content'

var Layout = React.createClass({
  getInitialState: function() {
    return {
      SidebarState: false,
    };
  },

  changeSidebarState() {
    this.setState({
      SidebarState: !this.state.SidebarState,
    });
  },

  render() {
    return (
      <div>
        <Sidebar changeSidebarState={this.changeSidebarState} SidebarState={this.state.SidebarState} />
        <Navbar changeSidebarState={this.changeSidebarState} SidebarState={this.state.SidebarState}/>
        <Content>
          {this.props.children}
        </Content>
        <Footer />
      </div>
    );
  }
});

module.exports = Layout;
