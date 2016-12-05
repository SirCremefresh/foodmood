import React from 'react';

import Sidebar from './groupSections/Sidebar.js';
import Paper from 'material-ui/Paper';

var Group = React.createClass({
  getInitialState: function() {
    return {
      content: "nothing to show",
    };
  },

  changeContentState(newcontent) {
    this.setState({
      content: newcontent
    });
  },

  render() {
    return (
      <div className="grid flex">
        <Sidebar changeContentState={this.changeContentState} groupName="Gruppe123" admin="1" />
        <Paper className="col_9">
          <h1>{this.state.content}</h1>
        </Paper>
      </div>
    );
  }
});

module.exports = Group;
