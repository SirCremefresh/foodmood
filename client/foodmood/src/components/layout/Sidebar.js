import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import SideNavBar from './SideNavBar'

var Router = require('react-router');

var Sidebar = React.createClass({
  changeSidebarState() {
    this.props.changeSidebarState();
  },

  gotoHome() {
    Router.hashHistory.push('/home');
    this.changeSidebarState();
  },
  gotoProfile() {
    Router.hashHistory.push('/profile');
    this.changeSidebarState();
  },
  gotoGroup() {
    Router.hashHistory.push('/group');
    this.changeSidebarState();
  },
  gotoNotFound() {
    Router.hashHistory.push('/404');
    this.changeSidebarState();
  },
  gotoLogin() {
    Router.hashHistory.push('/login');
    this.changeSidebarState();
  },

  gotoRegister() {
    Router.hashHistory.push('/register');
    this.changeSidebarState();
  },

  gotoAddgroup() {
    Router.hashHistory.push('/addgroup');
    this.changeSidebarState();
  },

  render() {
    return (
      <div>
          <Drawer open={this.props.SidebarState}>
            <SideNavBar changeSidebarState={this.props.changeSidebarState} SidebarState={this.props.SidebarState}/>
            <MenuItem onTouchTap={this.gotoHome}>Home</MenuItem>
            <MenuItem onTouchTap={this.gotoProfile}>Profil</MenuItem>
            <MenuItem onTouchTap={this.gotoGroup}>Gruppe</MenuItem>
            <MenuItem onTouchTap={this.gotoNotFound}>404</MenuItem>
            <MenuItem onTouchTap={this.gotoLogin}>Login</MenuItem>
            <MenuItem onTouchTap={this.gotoRegister}>Register</MenuItem>
            <MenuItem onTouchTap={this.gotoAddgroup}>gotoAddgroup</MenuItem>
          </Drawer>
      </div>
    );
  }
});



module.exports = Sidebar;
