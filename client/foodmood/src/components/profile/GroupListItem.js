import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {ListItem} from 'material-ui/List';

var Router = require('react-router');

var GroupListItem = React.createClass({
  handleClick() {
    Router.browserHistory.push('/group/' + this.props.groupID);
  },

  render() {
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
          onTouchTap={this.handleClick}
        />
      </div>
    );
  }
});

module.exports = GroupListItem;
