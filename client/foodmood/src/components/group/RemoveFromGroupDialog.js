import React from 'react';
var Router = require('react-router');

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

var RemoveFromGroupDialog = React.createClass({
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

  sendRemove() {
    HandleDataAction.sendData({
      type: "REMOVE_FROM_GROUP",
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
        label="Aus Gruppe entfernen"
        secondary={true}
        onTouchTap={this.sendRemove}
      />,
    ];

    return (
      <div>
        <Dialog
          title={this.props.username + "aus der Gruppe '" + this.props.groupName + "' entfernen"}
          modal={true}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.changeDialogState}
        >
          Bist du sicher, dass du {this.props.username} aus der Gruppe entfernen möchtest?
        </Dialog>
      </div>
    );
  }
});

module.exports = RemoveFromGroupDialog;
