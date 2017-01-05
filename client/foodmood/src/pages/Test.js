import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import HandleDataAction from "../actions/HandleDataAction";

var Test = React.createClass({
  testFunction() {
    HandleDataAction.sendData({
      type: "GET_MENUPLAN",
      value: {
        sessionKey:"8ff92883-a3d1-41c9-bacc-96c636a96b23",
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
