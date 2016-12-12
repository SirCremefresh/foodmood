import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

var Router = require('react-router');

var LoggedOut = React.createClass({
  logIn() {
    Router.browserHistory.push('/login');
  },

  register() {
    Router.browserHistory.push('/register');
  },

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color="#fff"/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Hello Guest" />
        <MenuItem primaryText="Log In" onTouchTap={this.logIn} />
        <MenuItem primaryText="Register" onTouchTap={this.register} />
      </IconMenu>
    );
  }
});

module.exports = LoggedOut;
