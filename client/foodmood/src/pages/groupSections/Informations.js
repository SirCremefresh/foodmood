import React from 'react';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import GroupInformationStore from '../../stores/GroupInformationStore'

import LeaveGroupDialog from '../../components/group/LeaveGroupDialog';


/*
 *  STYLES
 */
const titleDividerStyle = {
  height: 3,
};
const contentStyle = {
  marginLeft: 30,
  marginRight: 30,
};
const buttonStyle = {
  marginTop: 30,
  marginRight: 30,
  marginBottom: 15,
};

var Informations = React.createClass({
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
    var users =  GroupInformationStore.getUsersFromGroupWithID(this.props.groupID);
    const userTable = users.map((arr, index) => {
      return(
        <TableRow key={index + arr.username + "UserTable"}>
          <TableRowColumn>{arr.username}</TableRowColumn>
          <TableRowColumn>{arr.joinDate}</TableRowColumn>
          <TableRowColumn>{arr.admin == 1 ? "Ja" : "Nein"}</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div>
        <header>
          <h1 className="contentTitle">Informationen</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div style={contentStyle}>
          <h2>Beschreibung</h2>
          <p>{this.props.groupDescription}</p>
          <h2>Mitglieder</h2>
            <Table
              height="400px"
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
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
              >
              {userTable}
              </TableBody>
            </Table>
            <RaisedButton
              label="Gruppe verlassen"
              secondary={true}
              fullWidth={true}
              style={buttonStyle}
              onTouchTap={this.changeDialogState}
            />
          <LeaveGroupDialog open={this.state.dialogOpen} groupName={this.props.groupName} groupID={this.props.groupID}/>
        </div>
      </div>
    );
  }
});

module.exports = Informations;
