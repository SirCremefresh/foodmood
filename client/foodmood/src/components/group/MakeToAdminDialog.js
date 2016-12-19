import React from 'react';
var Router = require('react-router');

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

var MakeToAdminDialog = React.createClass({
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

  sendMakeToAdmin() {
    HandleDataAction.sendData({
      type: "MAKE_TO_ADMIN",
      value: {
        sessionKey: LoginInformationStore.getSessionKey(),
        groupID: this.props.groupID,
        username: this.props.username,
      }
    });
    this.handleChangeDialogState();
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
        label="Befördern"
        secondary={true}
        onTouchTap={this.sendMakeToAdmin}
      />,
    ];

    return (
      <div>
        <Dialog
          title={this.props.username + " zum Administrator befördern?"}
          modal={true}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.changeDialogState}
        >
          Bist du sicher, dass du {this.props.username} zum Administrator machen möchtest? Er verfügt danach auch über volle Rechte und kann die Gruppe verwalten.
        </Dialog>
      </div>
    );
  }
});

module.exports = MakeToAdminDialog;
