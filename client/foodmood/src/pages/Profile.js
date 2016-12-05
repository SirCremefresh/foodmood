import React from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';

import CustomTextField from '../components/CustomTextField'

import LoginInformationStore from "../stores/LoginInformationStore";
import GroupInformationStore from "../stores/GroupInformationStore";

import GroupListItem from "../components/profile/GroupListItem";

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const titleDividerStyle = {
  height: 3,
};



var Profile = React.createClass({
  getInitialState: function() {
    return {
      name : "",
      lastname : "",
      adress : "",
      phone : "",
      mail : "",
      IBAN : "",
      status : "",
      groups: [],
    };
  },

  setData() {
    var userInfo = LoginInformationStore.getUserInformation();
    this.setState({
      name      : userInfo["name"],
      lastname  : userInfo["lastname"],
      adress    : userInfo["adress"],
      phone     : userInfo["phone"],
      mail      : userInfo["mail"],
      IBAN      : userInfo["IBAN"],
      status    : userInfo["status"],
    });
  },

  setGroups() {
    this.setState({
      groups: GroupInformationStore.getGroups(),
    });
  },

  componentWillMount() {
    if (LoginInformationStore.getlogedInState()) {
      this.setData();
    }
    this.setGroups();

    LoginInformationStore.on("newUserInformation", this.setData);
    GroupInformationStore.on("newGroups", this.setGroups);
  },

  componentWillUnmount() {
    LoginInformationStore.removeListener("newUserInformation", this.setData);
    GroupInformationStore.removeListener("newGroups", this.setGroups);
  },


  render() {


    const messages = this.state.groups.map((arr, index) => {
      return <GroupListItem groupName={arr.Name} groupStatus={arr.Beschreibung} key={arr.Name + index + "GroupListProfilePage"} />;
    });

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
          <CustomTextField value={this.state.IBAN} FontIcon="credit_card" multiLine={false} hintText="IBAN" id="IBAN"/>
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
    </div>
    );
  }
});

module.exports = Profile;
