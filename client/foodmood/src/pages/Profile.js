import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

import LoginInformationStore from "../stores/LoginInformationStore";

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const titleDividerStyle = {
  height: 3,
};

const iconStyles = {
  width: 25,
};

const textfieldStyle = {
  marginLeft: "-15px",
};

const multilineTextfieldStyle = {
  marginLeft: 20,
  width: "100%",
  marginLeft: "-15px",
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
      iban : "",
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
      iban      : userInfo["iban"],
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
    return (
    <div className="grid flex">
      <Paper zDepth={1} className="col_4">
        <header>
          <h1 style={titleStyle}>Dein Account</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <MenuItem primaryText={<TextField hintText="Vorname" value={this.state.name} style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons">account_box</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Nachname" defaultValue={this.state.lastname} style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >face</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Adresse" defaultValue={this.state.adress} style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >hotel</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Telefonnummer" defaultValue={this.state.phone} style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >call</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Email Adresse" defaultValue={this.state.mail} style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >email</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="IBAN-Nummer" defaultValue={this.state.iban} style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >credit_card</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Status" defaultValue={this.state.status} style={multilineTextfieldStyle} underlineShow={false} multiLine={true} rows={2} rowsMax={5}/>} leftIcon={<FontIcon className="material-icons"  >star_rate</FontIcon>} />
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
