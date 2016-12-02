import React from 'react';
import AppBar from 'material-ui/AppBar';

var Router = require('react-router');

import Color from "../../stores/configs/Color";

var color = Color.getColor();


const SideNavBarStyle = {
  backgroundColor: color.primaryColor,
};








/**
 *
 * Top navigation
 *
 */
var SideNavBar = React.createClass({
  changeSidebarState() {
    this.props.changeSidebarState();
  },

  linkToHomePage() {
    Router.browserHistory.push('/home')
  },

  render() {
    return (
      <AppBar
        title="FoodMood"
        style={SideNavBarStyle}
        zDepth={2}
        onTitleTouchTap={this.linkToHomePage}
        onLeftIconButtonTouchTap={this.changeSidebarState}
      />
    );
  }
});

module.exports = SideNavBar;
