import React from 'react';
var Router = require('react-router');

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

var LeaveGroupDialog = React.createClass({
  getInitialState: function() {
    return {
      open : false
    };
  },
  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      open: nextProps.open,
    });
  },

  sendLeave() {
    HandleDataAction.sendData({
      type: "LEAVE_GROUP",
      value: {
        sessionKey: LoginInformationStore.getSessionKey(),
        groupID: this.props.groupID,
      }
    });
    this.handleChangeDialogState();
    Router.hashHistory.push('/profile');
  },

  handleChangeDialogState() {
    this.setState({
      open: !(this.state.open),
    });
  },

  render() {
    /*
     *  BUTTONS FOR DIALOG
     */
    const actions = [
      <FlatButton
        label="Abbrechen"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleChangeDialogState}
      />,
      <FlatButton
        label="Verlassen"
        secondary={true}
        onTouchTap={this.sendLeave}
      />,
    ];

    return (
      <div>
        <Dialog
          title={"Gruppe '" + this.props.groupName + "' verlassen"}
          modal={true}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.changeDialogState}
        >
          Bist du sicher, dass du die Gruppe verlassen möchtest?
          Dies kann von dir nicht rückgängig gemacht werden!
        </Dialog>
      </div>
    );
  }
});

module.exports = LeaveGroupDialog;
