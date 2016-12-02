import React from 'react';
import AppBar from 'material-ui/AppBar';

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

  render() {
    return (
      <AppBar
        title="FoodMood"
        style={SideNavBarStyle}
        zDepth={2}
        onLeftIconButtonTouchTap={this.changeSidebarState}
      />
    );
  }
});

module.exports = SideNavBar;
