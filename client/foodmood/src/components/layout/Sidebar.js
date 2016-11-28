import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


import Navbar from './Navbar'



var Sidebar = React.createClass({
  changeSidebarState() {
    this.props.changeSidebarState();
  },

  render() {
    return (
      <div>
          <Drawer open={this.props.SidebarState}>
            <Navbar changeSidebarState={this.props.changeSidebarState} SidebarState={this.props.SidebarState}/>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
      </div>
    );
  }
});



module.exports = Sidebar;
