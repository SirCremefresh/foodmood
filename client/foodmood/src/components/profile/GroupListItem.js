import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {ListItem} from 'material-ui/List';

var CustomTextField = React.createClass({
  getInitialState: function() {
    return {
      open : false
    };
  },

  handleOpen() {
    this.setState({open: true});
  },

  handleClose() {
    this.setState({open: false});
  },

  render() {
    const actions = [
      <FlatButton
          label="Abbrechen"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Verlassen"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>

        <ListItem
          primaryText={this.props.groupName}
          secondaryText={this.props.groupStatus}
          leftIcon={
            <FontIcon
              className="material-icons"
            >
              supervisor_account
            </FontIcon>
          }
          rightIcon={
            <FontIcon
              onTouchTap={this.handleOpen}
              className="material-icons"
            >
              delete
            </FontIcon>
          }
        />
        <Dialog
          title={"Gruppe '" + this.props.groupName + "' verlassen"}
          modal={true}
          actions={actions}
          open={this.state.open}
        >
          Bist du sicher das du die Gruppe verlassen möchtest?
          Dies kann von dir nicht rückgängig gemacht werden!
        </Dialog>
      </div>
    );
  }
});

module.exports = CustomTextField;
