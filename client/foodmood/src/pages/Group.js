import React from 'react';

var Router = require('react-router');

import GroupInformationStore from '../stores/GroupInformationStore';

import Sidebar from './groupSections/Sidebar';

import Bills from './groupSections/Bills';
import Informations from './groupSections/Informations';
import Menu from './groupSections/Menu';
import Addmenu from './groupSections/Addmenu';
import UserSettings from './groupSections/UserSettings'

import Paper from 'material-ui/Paper';

var Group = React.createClass({
  getInitialState: function() {

    return {
      content: "menu",
      groupName: "Gruppe",
      groupDescription: "Gruppenbeschreibung",
      admin: false,
    };
  },

  componentWillMount() {
    if (typeof this.props.params.id == "undefined") {
      Router.hashHistory.push('/profile');
    }



    if (GroupInformationStore.getIsLoaded()) {
      this.refreshData();
    }
    GroupInformationStore.on("newGroups", this.refreshData);

  },

  componentDidMount: function() {
    if (GroupInformationStore.getIsLoaded()) {
      if (!GroupInformationStore.isValidGroupID(this.props.params.id)) {
        Router.hashHistory.push('/profile');
      }
    }
  },

  componentWillUnmount() {
    GroupInformationStore.removeListener("newGroups", this.refreshData);
  },

  refreshData() {
    if (GroupInformationStore.getIsLoaded()) {
      if (!GroupInformationStore.isValidGroupID(this.props.params.id)) {
        Router.hashHistory.push('/profile');
      }
    }
    if (typeof this.props.params.id != "undefined") {
      if (GroupInformationStore.isValidGroupID(this.props.params.id)) {
        this.setState({
          groupName: GroupInformationStore.getGroupWithID(this.props.params.id).Name,
          groupDescription: GroupInformationStore.getGroupWithID(this.props.params.id).Beschreibung,
          admin: GroupInformationStore.getGroupWithID(this.props.params.id).admin,
        });
      }
    }
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
          content = <Menu groupID={this.props.params.id} />;
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
      case "userSettings":
          content = <UserSettings groupID={this.props.params.id} groupName={this.state.groupName} />
        break;
      default:
          content = <h1>{this.state.content}</h1>;
    }

    return (
      <div className="grid flex">
        <Sidebar changeContentState={this.changeContentState} groupName={this.state.groupName} admin={this.state.admin} />
        <Paper className="col_9">
          {content}
        </Paper>
      </div>
    );
  }
});

module.exports = Group;
