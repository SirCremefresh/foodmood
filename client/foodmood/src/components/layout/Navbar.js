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
  render() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={navbartStyle}
        zDepth={2} />
    );
  }
});

module.exports = Navbar;
