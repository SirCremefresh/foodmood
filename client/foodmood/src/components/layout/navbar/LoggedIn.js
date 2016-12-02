import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import SignOutAction from '../../../actions/SignOutAction'

var LoggedIn = React.createClass({
  signOut() {
    SignOutAction.signOut();
  },

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText={"Hello " + this.props.username} />
        <MenuItem primaryText="Sign out" onTouchTap={this.signOut} />
      </IconMenu>
    );
  }
});

module.exports = LoggedIn;
