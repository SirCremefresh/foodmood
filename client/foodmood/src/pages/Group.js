import React from 'react';

import Sidebar from './groupSections/Sidebar.js';
import Bills from './groupSections/Bills.js';
import Informations from './groupSections/Informations.js';

import Paper from 'material-ui/Paper';

var Group = React.createClass({
  getInitialState: function() {
    return {
      content: "menu",
    };
  },

  changeContentState(newcontent) {
    this.setState({
      content: newcontent
    });
  },

  render() {

    var content;

    switch (this.state.content) {
      case "bills":
          content = <Bills />;
        break;
      case "informations":
          content = <Informations groupName="Gruppe123" />;
        break;
      default:
          content = <h1>{this.state.content}</h1>;
    }

    return (
      <div className="grid flex">
        <Sidebar changeContentState={this.changeContentState} groupName="Gruppe123" admin="1" />
        <Paper className="col_9">
          {content}
        </Paper>
      </div>
    );
  }
});

module.exports = Group;
