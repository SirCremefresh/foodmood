import React from 'react';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Color from "../../stores/configs/Color";

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

import RemoveFromGroupDialog from '../../components/group/RemoveFromGroupDialog';

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

var UserSettings = React.createClass({
  getInitialState: function() {
    return {
      dialogOpen : false,
    };
  },
  changeDialogState() {
    this.setState({
      dialogOpen : !(this.state.dialogOpen)
    });
  },
  render() {
    return (
      <div>
        <header>
          <h1 className="contentTitle">Menü hinzufügen</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div style={contentStyle}>
          <h2>Mitglieder</h2>
          <Table
            height="260px"
            fixedHeader={true}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Seit</TableHeaderColumn>
                <TableHeaderColumn>Administrator</TableHeaderColumn>
                <TableHeaderColumn>Aktionen</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
            >
              <TableRow>
                <TableRowColumn>maX</TableRowColumn>
                <TableRowColumn>{new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear()}</TableRowColumn>
                <TableRowColumn>Nein</TableRowColumn>
                <TableRowColumn>
                  <FontIcon className="material-icons" onTouchTap={this.changeDialogState}>delete</FontIcon>
                  <FontIcon className="material-icons" onTouchTap={this.changeDialogState}>school</FontIcon>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
          <RemoveFromGroupDialog open={this.state.dialogOpen} groupName="LALA" groupID="123" username="Peter Fox"/>
        </div>
      </div>
    );
  }
});

module.exports = UserSettings;
