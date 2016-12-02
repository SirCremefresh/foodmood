import React from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';

import CustomTextField from '../components/CustomTextField'

import LoginInformationStore from "../stores/LoginInformationStore";
import DeleteDialog from "../components/layout/profile/DeleteDialog";

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const titleDividerStyle = {
  height: 3,
};



var Profile = React.createClass({
  getInitialState: function() {
    if (LoginInformationStore.getlogedInState()) {
      this.setData();
    }

    return {
      name : "",
      lastname : "",
      adress : "",
      phone : "",
      mail : "",
      IBAN : "",
      status : "",
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
    LoginInformationStore.on("newUserInformation", this.setData);
  },

  componentWillUnmount() {
    LoginInformationStore.removeListener("newUserInformation", this.setData);
  },


  render() {
    console.log(this.state.name);
    console.log(this.state.IBAN);
    return (
    <div className="grid flex">
      <Paper zDepth={1} className="col_4">
        <header>
          <h1 style={titleStyle}>Dein Account</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <CustomTextField value={this.state.name} FontIcon="account_box" multiLine={false} hintText="name"/>
          <Divider />
          <CustomTextField value={this.state.lastname} FontIcon="face" multiLine={false} hintText="lastname"/>
          <Divider />
          <CustomTextField value={this.state.adress} FontIcon="hotel" multiLine={false} hintText="adress" />
          <Divider />
          <CustomTextField value={this.state.phone} FontIcon="call" multiLine={false} hintText="phone" />
          <Divider />
          <CustomTextField value={this.state.mail} FontIcon="email" multiLine={false} hintText="mail" />
          <Divider />
          <CustomTextField value={this.state.IBAN} FontIcon="credit_card" multiLine={false} hintText="IBAN" />
          <Divider />
          <CustomTextField value={this.state.status} FontIcon="star_rate" multiLine={true} hintText="status" />
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
            <ListItem primaryText="Sent mail" leftIcon={<FontIcon className="material-icons">supervisor_account</FontIcon>} rightIcon={<FontIcon className="material-icons">delete</FontIcon>} />
            <ListItem primaryText="Sent mail" leftIcon={<FontIcon className="material-icons">supervisor_account</FontIcon>} rightIcon={<FontIcon className="material-icons">delete</FontIcon>} />
            <ListItem primaryText="Sent mail" leftIcon={<FontIcon className="material-icons">supervisor_account</FontIcon>} rightIcon={<FontIcon className="material-icons">delete</FontIcon>} />
            <ListItem primaryText="Sent mail" leftIcon={<FontIcon className="material-icons">supervisor_account</FontIcon>} rightIcon={<FontIcon className="material-icons">delete</FontIcon>} />
            <ListItem primaryText="Sent mail" leftIcon={<FontIcon className="material-icons">supervisor_account</FontIcon>} rightIcon={<FontIcon className="material-icons">delete</FontIcon>} />
          </List>
        </div>
      </Paper>
      <DeleteDialog />
      <Paper zDepth={1} className="col_12">
        <header>
          <h1 style={titleStyle}>Menüplan</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>
                  Montag
                </th>
                <th>
                  Dienstag
                </th>
                <th>
                  Mittwoch
                </th>
                <th>
                  Donnerstag
                </th>
                <th>
                  Freitag
                </th>
                <th>
                  Samstag
                </th>
                <th>
                  Sonntag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  Morgen
                </th>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
              </tr>
              <tr>
                <th>
                  Mittag
                </th>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
              </tr>
              <tr>
                <th>
                  Abend
                </th>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
                <td>
                  Salami
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Paper>
    </div>
    );
  }
});

module.exports = Profile;
