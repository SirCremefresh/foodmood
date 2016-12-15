import React from 'react';

import Sidebar from './groupSections/Sidebar';

import Bills from './groupSections/Bills';
import Informations from './groupSections/Informations';
import Menu from './groupSections/Menu';
import Addmenu from './groupSections/Addmenu';

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
          content = <Informations groupDescription={this.props.params.id} groupName={this.props.params.id} groupID={this.props.params.id}/>;
        break;
      case "addmenu":
          content = <Addmenu groupID={this.props.params.id} />
        break;
      default:
          content = <h1>{this.state.content}</h1>;
    }

    return (
      <div className="grid flex">
        <Sidebar changeContentState={this.changeContentState} groupName={this.props.params.id} admin="1" />
        <Paper className="col_9">
          {content}
        </Paper>
      </div>
    );
  }
});

module.exports = Group;
