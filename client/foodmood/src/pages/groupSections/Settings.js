import React from 'react';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

const titleDividerStyle = {
  height: 3,
};

const buttonStyle = {
  marginTop: 30,
  marginRight: 30,
  marginBottom: 15,
};


var Settings = React.createClass({
  sendRequest() {
    HandleDataAction.sendData({
      type: "REFRESH_MENUPLAN",
      value: {
        sessionKey: LoginInformationStore.getSessionKey(),
        groupID: this.props.groupID,
      }
    });
  },
  render() {
    return (
      <div>
        <header>
          <h1 className="contentTitle">Allgemeine Einstellungen</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <RaisedButton
            label="Menüplan neu generieren"
            secondary={true}
            fullWidth={true}
            style={buttonStyle}
            onTouchTap={this.sendRequest}
          />
        </div>
      </div>
    );
  }
});

module.exports = Settings;
