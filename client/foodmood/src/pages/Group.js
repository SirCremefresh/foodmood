import React from 'react';

import Sidebar from './groupSections/Sidebar.js';
import Paper from 'material-ui/Paper';

var Group = React.createClass({
  getInitialState: function() {
    return {
      content: "", 
    };
  },
  render() {
    return (
      <div className="grid flex">
        <Sidebar groupName="Gruppe123" admin="1" />
        <Paper className="col_9">
          <h1>sdgdsg</h1>
        </Paper>
      </div>
    );
  }
});

module.exports = Group;
