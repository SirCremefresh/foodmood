import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import SideNavBar from './SideNavBar'



var Sidebar = React.createClass({
  changeSidebarState() {
    this.props.changeSidebarState();
  },

  render() {
    return (
      <div>
          <Drawer open={this.props.SidebarState}>
            <SideNavBar changeSidebarState={this.props.changeSidebarState} SidebarState={this.props.SidebarState}/>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
      </div>
    );
  }
});



module.exports = Sidebar;
