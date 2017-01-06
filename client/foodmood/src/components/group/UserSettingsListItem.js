import React from 'react';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


import Color from "../../stores/configs/Color";

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

import RemoveFromGroupDialog from './RemoveFromGroupDialog';
import MakeToAdminDialog from './MakeToAdminDialog';


var color = Color.getColor();

const titleDividerStyle = {
  height: 3,
};

const registerButtonOverlayStyle = {
  backgroundColor: color.accentColor,
}

const registerButtonlabelStyle = {
  color: "#fff",
}

const registerButtonStyle = {
  width: "30%",
  marginLeft: "63%",
  marginBottom: "10px",
  marginTop: "10px",
}

const contentStyle = {
  marginLeft: 30,
  marginRight: 30,
};

var UserSettingsListItem = React.createClass({
  changeRemoveDialogState() {
    this.props.changeRemoveDialogSetData({username : this.props.username});
  },
  changeMakeadminDialogState() {
    this.props.changeMakeadminDialogSetData({username : this.props.username});
  },
  render() {
    return (
        <TableRow>
          <TableRowColumn>{this.props.username}</TableRowColumn>
          <TableRowColumn>{this.props.date}</TableRowColumn>
          <TableRowColumn>{this.props.admin}</TableRowColumn>
          <TableRowColumn>
            <FontIcon className="material-icons" onTouchTap={this.changeRemoveDialogState}>delete</FontIcon>
            <FontIcon className="material-icons" onTouchTap={this.changeMakeadminDialogState}>school</FontIcon>
          </TableRowColumn>
        </TableRow>
    );
  }
});

module.exports = UserSettingsListItem;
