import React from 'react';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Color from "../../stores/configs/Color";

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

import GroupInformationStore from '../../stores/GroupInformationStore'

import RemoveFromGroupDialog from '../../components/group/RemoveFromGroupDialog';
import MakeToAdminDialog from '../../components/group/MakeToAdminDialog';

import UserSettingsListItem from '../../components/group/UserSettingsListItem'

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
      removeUserUsername : "",
      dialogMakeadminOpen : false,
      makeAdminUsername : "",
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



  changeRemoveDialogSetData(obj) {
    this.setState({
      removeUserUsername: obj.username,
    },
    this.setState({
      dialogRemoveOpen : !(this.state.dialogRemoveOpen)
    })
    );
  },

  changeRemoveDialogState() {
    this.setState({
      dialogRemoveOpen : !(this.state.dialogRemoveOpen)
    });
  },

  changeMakeadminDialogSetData(obj) {
    this.setState({
      makeAdminUsername: obj.username,
    },
    this.setState({
      dialogMakeadminOpen : !(this.state.dialogMakeadminOpen)
    })
    );
  },

  changeMakeadminDialogState() {
    this.setState({
      dialogMakeadminOpen : !(this.state.dialogMakeadminOpen)
    });
  },
  render() {
    var users =  GroupInformationStore.getUsersFromGroupWithID(this.props.groupID);
    const userTable = users.map((arr, index) => {
      return(
        <UserSettingsListItem key={index + arr.username + "UserTableuSERsETTINGS"} username={arr.username} date={new Date(arr.joinDate).getDate() + "." + (new Date(arr.joinDate).getMonth() + 1) + "." + new Date(arr.joinDate).getFullYear()} admin={arr.admin == 1 ? "Ja" : "Nein"}  changeMakeadminDialogSetData={this.changeMakeadminDialogSetData} changeRemoveDialogSetData={this.changeRemoveDialogSetData} />

      );
    });

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
                {userTable}
              </TableBody>
            </Table>
            <RemoveFromGroupDialog changeRemoveDialogState={this.changeRemoveDialogState} open={this.state.dialogRemoveOpen} groupName={this.props.groupName} groupID={this.props.groupID} username={this.state.removeUserUsername} />
            <MakeToAdminDialog changeMakeadminDialogState={this.changeMakeadminDialogState} open={this.state.dialogMakeadminOpen} groupName={this.props.groupName} groupID={this.props.groupID} username={this.state.makeAdminUsername} />
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
