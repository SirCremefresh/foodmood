import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {ListItem} from 'material-ui/List';

const iconStyle = {
  float: "right",
};

var InviteListItem = React.createClass({
  handleLeaveClick(id) {
    alert("REJECTED INVITE FROM GROUP " + id);
  },
  handleAcceptClick(id) {
    alert("ACCEPTED INVITE FROM GROUP " + id);
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
          onTouchTap={this.handleLeaveClick.bind(this, this.props.groupID)}
        >
          clear
        </FontIcon>

        <FontIcon
          className="material-icons"
          style={iconStyle}
          color="#000000"
          hoverColor="#4CAF50"
          onTouchTap={this.handleAcceptClick.bind(this, this.props.groupID)}
        >
          done
        </FontIcon>
    </ListItem>
    );
  }
});

module.exports = InviteListItem;
