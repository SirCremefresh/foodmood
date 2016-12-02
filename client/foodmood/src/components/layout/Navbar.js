import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import LoggedIn from './navbar/LoggedIn'
import LoggedOut from './navbar/LoggedOut'

import LoginInformationStore from "../../stores/LoginInformationStore";

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
  getInitialState: function() {
    return {
      logedIn: false,
      username: "",
    };
  },

  componentWillMount() {
    LoginInformationStore.on("loginState", this.changelogedInState);
  },

  componentWillUnmount() {
    LoginInformationStore.removeListener("loginState", this.changelogedInState);
  },

  changelogedInState() {
    this.setState({
      logedIn: LoginInformationStore.getlogedInState(),
      username: LoginInformationStore.getUsername(),
    });
  },

  changeSidebarState() {
    this.props.changeSidebarState();
  },

  render() {
    return (
      <AppBar
        title="FoodMood"
        style={navbartStyle}
        zDepth={2}
        onLeftIconButtonTouchTap={this.changeSidebarState}
        iconElementRight={this.state.logedIn ? <LoggedIn username={this.state.username}/> : <LoggedOut />}/>
    );
  }
});

module.exports = Navbar;
