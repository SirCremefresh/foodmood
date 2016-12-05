import React from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';

import CustomTextField from '../components/CustomTextField'

import LoginInformationStore from "../stores/LoginInformationStore";

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
      groups: [
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jfs", status: "Status"},
        {name: "jgsfdgfs", status: "Statusgfdss"},
        {name: "jgfsdgfs", status: "Statsfdsgdfgsdfus"},
        {name: "HalloABC", status: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse"},

      ],
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



  componentWillMount() {
    if (LoginInformationStore.getlogedInState()) {
      this.setData();
    }
    LoginInformationStore.on("newUserInformation", this.setData);
  },

  componentWillUnmount() {
    LoginInformationStore.removeListener("newUserInformation", this.setData);
  },


  render() {


    const messages = this.state.groups.map((arr, index) => {
      return <GroupListItem groupName={arr.name} groupStatus={arr.status} key={arr.name + index + "GroupListProfilePage"} />;
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

      <Paper zDepth={1} className="col_12">
        <header>
          <h1 style={titleStyle}>Menüplan</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>

        </div>
      </Paper>
    </div>
    );
  }
});

module.exports = Profile;
