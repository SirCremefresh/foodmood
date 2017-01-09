import React from 'react';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Color from "../stores/configs/Color";

import HandleDataAction from "../actions/HandleDataAction";

import RegistrationStore from "../stores/RegistrationStore";
import LoginInformationStore from "../stores/LoginInformationStore";

var Router = require('react-router');

var color = Color.getColor();

const RegisterTitleStyle = {
  backgroundColor: color.primaryColor,
  padding: 10,
  color: "#fff"
};

const AddUserInputStyle = {
  width: "50%",
  marginLeft: "3%"
};

const RegisterInputStyle = {
  width: "90%",
  marginLeft: "3%"
};

const underlineStyle = {
  color: color.primaryColorDark,
}

const floatingLabelStyle = {
  color: color.primaryColorDark,
  fontSize: 18
}

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

const errorMsgstyle = {
  color: "red"
}

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const content = {
  marginLeft: 30,
  lineHeight: 2,
}

const titleDividerStyle = {
  height: 3,
};


var AddGroup = React.createClass({
  getInitialState: function() {
    return {
      groupName: "",
      groupDescription: "",
      addMemberInput: "",
      groupMembers: [],
    };
  },

  handleChangeGroupName(event) {
    this.setState({groupName: event.target.value});
  },

  handleChangeGroupDescription(event) {
    this.setState({groupDescription: event.target.value});
  },

  handleChangeAddMemberInput(event) {
    this.setState({addMemberInput: event.target.value});
  },

  addUserToList() {
    if (this.state.addMemberInput !== "") {
      var members = this.state.groupMembers;
      members.push(this.state.addMemberInput);
      this.setState({
        groupMembers: members,
        addMemberInput: "",
      });
    }
  },

  sendData() {
    if (this.state.groupName != "" && this.state.groupDescription != "") {
      HandleDataAction.sendData({
        type: "CREATE_GROUP",
        value: {
          sessionKey: LoginInformationStore.getSessionKey(),
          groupName: this.state.groupName,
          groupDescription: this.state.groupDescription,
          groupMembers: this.state.groupMembers,
        }
      });
      Router.hashHistory.push('/profile');
    }
  },

  render() {
    var memberTable = this.state.groupMembers.map((arr, index) => {
      return(
        <TableRow key={index + arr}>
          <TableRowColumn>{index}</TableRowColumn>
          <TableRowColumn>{arr}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div className="grid flex">
        <Paper className="col_12">
          <header>
            <h1 style={titleStyle}>Gruppe hinzufügen</h1>
            <Divider style={titleDividerStyle}/>
          </header>
          <div style={content}>

            <TextField
              style={RegisterInputStyle}
              underlineStyle={underlineStyle}
              floatingLabelStyle={floatingLabelStyle}
              onChange={this.handleChangeGroupName}
              value={this.state.groupName}
              maxLength={40}
              hintText="MVP Group"
              floatingLabelText="groupName"
              type="text"
              id="nameField"
            /><br />

            <TextField
              style={RegisterInputStyle}
              underlineStyle={underlineStyle}
              floatingLabelStyle={floatingLabelStyle}
              onChange={this.handleChangeGroupDescription}
              value={this.state.groupDescription}
              maxLength={180}
              multiLine={true}
              rows={2}
              hintText="en cooli Gruppe"
              floatingLabelText="groupDescription"
              type="text"
              id="nameField"
            /><br />

            <TextField
              style={{marginLeft: "3%"}}
              onChange={this.handleChangeAddMemberInput}
              value={this.state.addMemberInput}
              hintText="en cooli Gruppe"
              type="text"
            />

            <RaisedButton
              onTouchTap={this.addUserToList}
              secondary={true}
              label="Add User"
            /><br />

            <RaisedButton
              onTouchTap={this.sendData}
              style={{width: "90%", marginLeft: "3%"}}
              secondary={true}
              label="Make Group"
            />
            <Table>
              <TableHeader
                displaySelectAll= {false}
                >
                <TableRow>
                  <TableHeaderColumn>Nr</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox= {false}
                >
                {memberTable}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </div>
    );
  }
});

module.exports = AddGroup;
