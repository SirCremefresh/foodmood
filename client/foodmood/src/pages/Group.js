import React from 'react';

import GroupInformationStore from '../stores/GroupInformationStore';

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
      groupName: "Gruppe",
      groupDescription: "Gruppenbeschreibung",
    };
  },

  componentWillMount() {
    if (GroupInformationStore.getIsLoaded()) {
      this.refreshData();
    }

    GroupInformationStore.on("newGroups", this.refreshData);
  },
  componentWillUnmount() {
    GroupInformationStore.removeListener("newGroups", this.refreshData);
  },

  refreshData() {
    this.setState({
      groupName: GroupInformationStore.getGroupWithID(this.props.params.id).Name,
      groupDescription: GroupInformationStore.getGroupWithID(this.props.params.id).Beschreibung,
    });
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
          content = <Informations groupDescription={this.state.groupDescription} groupName={this.state.groupName} groupID={this.props.params.id}/>;
        break;
      case "addmenu":
          content = <Addmenu groupID={this.props.params.id} />
        break;
      default:
          content = <h1>{this.state.content}</h1>;
    }

    return (
      <div className="grid flex">
        <Sidebar changeContentState={this.changeContentState} groupName={this.state.groupName} admin="1" />
        <Paper className="col_9">
          {content}
        </Paper>
      </div>
    );
  }
});

module.exports = Group;
