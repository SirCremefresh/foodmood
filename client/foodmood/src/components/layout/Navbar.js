import React from 'react';
import AppBar from 'material-ui/AppBar';

import Color from "../../stores/configs/Color";

var color = Color.getColor();


const navbartStyle = {
  backgroundColor: color.primaryColor,
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
