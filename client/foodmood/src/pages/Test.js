import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import HandleDataAction from "../actions/HandleDataAction";

var Test = React.createClass({
  testFunction() {
    HandleDataAction.sendData({
      type: "GET_MENUPLAN",
      value: {
        sessionKey:"426fc893-0b39-4546-b13e-d68880f0c75a",
        groupID: "1",
      }
    });
  },
  render() {
    return (
      <RaisedButton
        onTouchTap={this.testFunction}
        label="test"
      />
    );
  }
});

module.exports = Test;
