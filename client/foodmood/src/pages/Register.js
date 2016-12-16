import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Color from "../stores/configs/Color";

import HandleDataAction from "../actions/HandleDataAction";

import RegistrationStore from "../stores/RegistrationStore";

var color = Color.getColor();

const RegisterTitleStyle = {
  backgroundColor: color.primaryColor,
  padding: 10,
  color: "#fff"
};

const RegisterInputStyle = {
  width: "90%",
  marginLeft: "3%"
};

const underlineStyle = {
  color: color.primaryColorDark,
}

const floatingLabelStyle = {
  color: color.primaryColorDark,
  fontSize: 18
}

const registerButtonOverlayStyle = {
  backgroundColor: color.accentColor,
}

const registerButtonlabelStyle = {
  color: "#fff",
}

const registerButtonStyle = {
  width: "30%",
  marginLeft: "63%",
  marginBottom: "10px",
  marginTop: "10px",
}

const errorMsgstyle = {
  color: "red"
}





var Register = React.createClass({
  getInitialState: function() {
    return {
      valid: false,
      isUsernameTaken: false,
      username: "",
      password : "",
      passwordrep : "",
      name: "",
      lastname : "",
      passwordErrMsg: "",
      passwordrepErrMsg: "",
      usernameErrMsg: "",
    };
  },

  componentWillMount() {
    RegistrationStore.on("userTaken", this.handleIsUsernameTaken);
  },

  componentWillUnmount() {
    RegistrationStore.removeListener("userTaken", this.handleIsUsernameTaken);
  },

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
    this.validateUsername(event.target.value)
  },

  handleChangePassword(event) {
    this.setState({password: event.target.value});
    this.validatePassword(event.target.value);
    this.validatePasswordrep({passval: true, vall: event.target.value});
  },

  handleChangePasswordrep(event) {
    this.setState({passwordrep: event.target.value});
    this.validatePasswordrep({passval: false, vall: event.target.value});
  },

  handleChangeName(event) {
    this.setState({name: event.target.value});
  },

  handleChangeLastname(event) {
    this.setState({lastname: event.target.value});
  },

  handleIsUsernameTaken() {
    var isUsernameTaken = RegistrationStore.getIsUsernameTaken();
    if (isUsernameTaken) {
      this.setState({
        isUsernameTaken: true,
        valid: false,
        usernameErrMsg: "Benutzername schon vergeben",
      });
    } else {
      this.setState({
        isUsernameTaken: false,
        valid: true,
        usernameErrMsg: "",
      });
    }
  },

  validatePassword(value) {
    if (value.length <= 6) {
      this.setState({
        passwordErrMsg: "Passwort zu kurz",
        valid: false,
      });
    } else {
      this.setState({
        passwordErrMsg: "",
        valid: true,
      });
    }
  },

  validateUsername(value) {
    HandleDataAction.sendData({type: "IS_USERNAME_TAKEN", value: value});
  },

  validatePasswordrep(dataobj) {
    var pwdRepVal;
    var pwdVal;

    if (dataobj.passval) {
      pwdVal = dataobj.vall;
      pwdRepVal = this.state.passwordrep;
    } else {
      pwdVal = this.state.password;
      pwdRepVal = dataobj.vall;
    }

    if (pwdVal == pwdRepVal) {
      this.setState({
        passwordrepErrMsg: ""
      });
    } else {
      if (pwdRepVal != "") {
        this.setState({
          passwordrepErrMsg: "Passwörter nicht identisch"
        });
      }
    }
  },

  sendInput() {
    if (this.state.valid) {
      HandleDataAction.sendData({type: "REGISTER_NEW_USER", value: {
                                                                    username: this.state.username,
                                                                    name: this.state.name,
                                                                    lastname: this.state.lastname,
                                                                    password: this.state.password,
                                                                    }
                                });
    }
  },

  render() {
    return (
      <Paper zDepth={1} id="register">
        <div>
          <Paper zDepth={1} style={RegisterTitleStyle}>
            <h1>Registrieren</h1>
            <p id="errorTextField" style={errorMsgstyle}></p>
          </Paper>
          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeUsername}
            value={this.state.username}
            className="RegisterInput"
            hintText="MaxMüller21"
            floatingLabelText="Benutzername"
            type="text"
            errorText={this.state.usernameErrMsg}
            maxLength={40}
            id="usernameField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeName}
            value={this.state.name}
            maxLength={40}
            className="RegisterInput"
            hintText="Max"
            floatingLabelText="Vorname"
            type="text"
            id="nameField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeLastname}
            value={this.state.lastname}
            className="RegisterInput"
            hintText="Müller"
            maxLength={40}
            floatingLabelText="Nachname"
            type="text"
            id="lastnameField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangePassword}
            value={this.state.password}
            className="RegisterInput"
            hintText="geheimesPasswort21"
            floatingLabelText="Passwort"
            type="password"
            maxLength={200}
            errorText={this.state.passwordErrMsg}
            id="passwordField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangePasswordrep}
            value={this.state.passwordrep}
            className="RegisterInput"
            hintText="geheimesPasswort21"
            floatingLabelText="Passwort wiederholen"
            type="password"
            maxLength={200}
            errorText={this.state.passwordrepErrMsg}
            id="passwordRepField"
          /><br />

          <RaisedButton
            onTouchTap={this.handleSubmit}
            style={registerButtonStyle}
            overlayStyle={registerButtonOverlayStyle}
            labelStyle={registerButtonlabelStyle}
            onTouchTap={this.sendInput}
            id="registerButton"
            type="register"
            label="Registrieren"
          />
        </div>
      </Paper>
    );
  }
});

module.exports = Register;
