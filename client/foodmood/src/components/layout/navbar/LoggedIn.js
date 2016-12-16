import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

var Router = require('react-router');

import SignOutAction from '../../../actions/SignOutAction'

var LoggedIn = React.createClass({
  signOut() {
    SignOutAction.signOut();
    Router.browserHistory.push('/login');
  },

  toProfilePage() {
    Router.browserHistory.push('/profile');
  },

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton ><MoreVertIcon color="#fff"/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText={"Hello " + this.props.username} onTouchTap={this.toProfilePage} />
        <MenuItem primaryText="Sign out" onTouchTap={this.signOut} />
      </IconMenu>
    );
  }
});

module.exports = LoggedIn;
