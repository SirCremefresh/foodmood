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
import MakeToAdminDialog from '../../components/group/MakeToAdminDialog';

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
      dialogRemoveOpen : false,
      dialogMakeadminOpen : false,
    };
  },
  sendInvitation() {
    if(document.getElementById("invitationUsername").value) {
      HandleDataAction.sendData({
        type: "SEND_GROUP_INVITATION",
        value: {
          sessionKey: LoginInformationStore.getSessionKey(),
          groupID: this.props.groupID,
          username: document.getElementById("invitationUsername").value,
        }
      });
    }
  },
  changeRemoveDialogState() {
    this.setState({
      dialogRemoveOpen : !(this.state.dialogRemoveOpen)
    });
  },
  changeMakeadminDialogState() {
    this.setState({
      dialogMakeadminOpen : !(this.state.dialogMakeadminOpen)
    });
  },
  render() {
    return (
      <div>
        <header>
          <h1 className="contentTitle">Benutzer verwalten</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div style={contentStyle}>
          <div>
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
                    <FontIcon className="material-icons" onTouchTap={this.changeRemoveDialogState}>delete</FontIcon>
                    <FontIcon className="material-icons" onTouchTap={this.changeMakeadminDialogState}>school</FontIcon>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <RemoveFromGroupDialog open={this.state.dialogRemoveOpen} groupName="LALA" groupID={this.props.groupID} username="Peter Fox"/>
            <MakeToAdminDialog open={this.state.dialogMakeadminOpen} groupID={this.props.groupID} username="DonatoPot"/>
          </div>
          <div>
            <h2>Benutzer einladen</h2>
            <TextField
              hintText="Max21"
              floatingLabelText="Benutzername"
              id="invitationUsername"
            />
          <RaisedButton label="Einladen" secondary={true} onTouchTap={this.sendInvitation}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserSettings;
