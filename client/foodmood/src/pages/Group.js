import React from 'react';

import Sidebar from './groupSections/Sidebar';

import Bills from './groupSections/Bills';
import Informations from './groupSections/Informations';
import Menu from './groupSections/Menu';


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
      case "menu":
          content = <Menu />;
        break;
      case "bills":
          content = <Bills />;
        break;
      case "informations":
          content = <Informations groupDescription="lalala alsaFD AF A FSG FDG  dfg  gfd  dsg fds hg fhd f hfdg ddyafg dsfh  gfsh fdh gh fsh  dfsh gfh gfs h gf"/>;
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
