import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {ListItem} from 'material-ui/List';

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

const iconStyle = {
  float: "right",
};

var InviteListItem = React.createClass({
  handleLeaveClick() {
    HandleDataAction.sendData({
      type: "INVITE_REJECTED",
      value: {
        sessionKey: LoginInformationStore.getSessionKey(),
        groupID: this.props.groupID,
      }
    });
  },
  handleAcceptClick() {
    HandleDataAction.sendData({
      type: "INVITE_ACCEPTED",
      value: {
        sessionKey: LoginInformationStore.getSessionKey(),
        groupID: this.props.groupID,
      }
    });
  },

  render() {
    return (
      <ListItem
        primaryText={this.props.groupName}
        secondaryText={this.props.groupStatus}
      >
        <FontIcon
          className="material-icons"
          style={iconStyle}
          color="#000000"
          hoverColor="#FF0000"
          onTouchTap={this.handleLeaveClick}
        >
          clear
        </FontIcon>

        <FontIcon
          className="material-icons"
          style={iconStyle}
          color="#000000"
          hoverColor="#4CAF50"
          onTouchTap={this.handleAcceptClick}
        >
          done
        </FontIcon>
    </ListItem>
    );
  }
});

module.exports = InviteListItem;
