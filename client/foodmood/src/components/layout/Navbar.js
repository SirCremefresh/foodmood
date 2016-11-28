import React from 'react';
import AppBar from 'material-ui/AppBar';

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
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
});

module.exports = Navbar;
