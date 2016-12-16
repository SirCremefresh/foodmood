import React from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

import CustomTextField from '../components/CustomTextField';
import FontIcon from 'material-ui/FontIcon';

import LoginInformationStore from "../stores/LoginInformationStore";
import GroupInformationStore from "../stores/GroupInformationStore";

import GroupListItem from "../components/profile/GroupListItem";
import InviteListItem from "../components/profile/InviteListItem";

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const titleDividerStyle = {
  height: 3,
};

const contentPStyle = {
  marginLeft: 30,
};

var Profile = React.createClass({
  getInitialState: function() {
    return {
      name : "",
      lastname : "",
      adress : "",
      phone : "",
      mail : "",
      status : "",
      groups: [],
      groupsInvites: [],
    };
  },





  componentWillMount() {
    LoginInformationStore.on("newUserInformation", this.setData);
    GroupInformationStore.on("newGroups", this.setGroups);
    GroupInformationStore.on("newGroupsIvites", this.setGroupsInvites);
  },

  componentDidMount() {
    if (LoginInformationStore.getlogedInState()) {
      this.setData();
    }

    this.setGroups();
    this.setGroupsInvites();
  },

  componentWillUnmount() {
    LoginInformationStore.removeListener("newUserInformation", this.setData);
    GroupInformationStore.removeListener("newGroups", this.setGroups);
    GroupInformationStore.removeListener("newGroupsIvites", this.setGroupsInvites);
  },

  setGroupsInvites() {
    console.log("settinf");
    this.setState({
      groupsInvites: GroupInformationStore.getGroupsInvites(),
    });
  },

  setData() {
    var userInfo = LoginInformationStore.getUserInformation();
    this.setState({
      name      : userInfo["name"],
      lastname  : userInfo["lastname"],
      adress    : userInfo["adress"],
      phone     : userInfo["phone"],
      mail      : userInfo["mail"],
      status    : userInfo["status"],
    });
  },

  setGroups() {
    this.setState({
      groups: GroupInformationStore.getGroups(),
    });
  },


  render() {
    var messages;
    if (this.state.groups.length !== 0) {
      messages = this.state.groups.map((arr, index) => {
        return <GroupListItem groupName={arr.Name} groupStatus={arr.Beschreibung} key={arr.Name + index + "GroupListProfilePage"} groupID={arr.groupID} />;
      });
    } else {
      messages = <p style={contentPStyle}>Du bist in keiner Gruppe</p>
    }

    var groupsInvites;
    console.log(this.state.groupsInvites);
    console.log(this.state.groupsInvites.length);
    if (this.state.groupsInvites.length !==0) {
      groupsInvites = this.state.groupsInvites.map((obj, index) => {
        console.log(obj);
        return (<InviteListItem
          groupName={obj.Name}
          groupStatus={obj.Beschreibung}
          groupID={obj.groupID}
          key={"Groupinvite"+obj.Name+obj.groupID}/>
        );
      });
    } else {
      groupsInvites = <p style={contentPStyle}>Du bist in keiner Gruppe</p>;
    }
    return (
    <div className="grid flex">
      <Paper zDepth={1} className="col_4">
        <header>
          <h1 style={titleStyle}>Dein Account</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <CustomTextField value={this.state.name} FontIcon="account_box" multiLine={false} hintText="Vorname" id="name"/>
          <Divider />
          <CustomTextField value={this.state.lastname} FontIcon="face" multiLine={false} hintText="Nachname" id="lastname"/>
          <Divider />
          <CustomTextField value={this.state.adress} FontIcon="hotel" multiLine={false} hintText="Adresse" id="adress"/>
          <Divider />
          <CustomTextField value={this.state.phone} FontIcon="call" multiLine={false} hintText="Telefonnummer" id="phone"/>
          <Divider />
          <CustomTextField value={this.state.mail} FontIcon="email" multiLine={false} hintText="E-Mail Adresse" id="email"/>
          <Divider />
          <CustomTextField value={this.state.status} FontIcon="star_rate" multiLine={true} hintText="Status" id="status"/>
          <Divider />
        </div>
      </Paper>

      <Paper zDepth={1} className="col_8">
        <header>
          <h1 style={titleStyle}>Gruppen</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <List>
          {messages}
          </List>
        </div>
      </Paper>

      <Paper zDepth={1} className="col_8">
        <header>
          <h1 style={titleStyle}>Einladungen</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <List>
            {groupsInvites}

          </List>
        </div>
      </Paper>
    </div>
    );
  }
});

module.exports = Profile;
