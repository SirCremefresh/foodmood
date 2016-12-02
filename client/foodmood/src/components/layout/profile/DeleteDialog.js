import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

var DeleteDialog = React.createClass({

  getInitialState: function() {
    return {
      open : false,
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
        label="Verlassen"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Diese Gruppe verlassen" onTouchTap={this.handleOpen} />
        <Dialog
          title="Diese Gruppe verlassen"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Bist du sicher das du die Gruppe verlassen möchtest?
          Dies kann von dir nicht rückgängig gemacht werden!
        </Dialog>
      </div>
    );
  }
});

module.exports = DeleteDialog;
