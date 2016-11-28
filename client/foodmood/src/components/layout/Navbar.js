import React from 'react';
import AppBar from 'material-ui/AppBar';

import Color from "../../configs/Color";

const navbartStyle = {
  backgroundColor: Color.primaryColor,
};

/**
 *
 * Top navigation
 *
 */
var Navbar = React.createClass({
  changeSidebarState() {
    this.props.changeSidebarState();
  },

  render() {
    return (
      <AppBar
        title="FoodMood"
        style={navbartStyle}
        zDepth={2}
        onLeftIconButtonTouchTap={this.changeSidebarState}/>
    );
  }
});

module.exports = Navbar;
