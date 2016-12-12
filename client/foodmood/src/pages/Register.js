import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Color from "../stores/configs/Color";

import HandleDataAction from "../actions/HandleDataAction";

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
      username: "",
      password : "",
      passwordrep : "",
      name: "",
      lastname : "",
      passwordrepErrMsg: "",
    };
  },

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  },

  handleChangePassword(event) {
    this.setState({password: event.target.value});
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

    console.log("rep :" + pwdRepVal);
    console.log("pas :" + pwdVal);

    if (pwdVal == pwdRepVal) {
      this.setState({
        passwordrepErrMsg: ""
      });
    } else {
      if (pwdRepVal != "") {
        this.setState({
          passwordrepErrMsg: "password not identical"
        });
      }
    }
  },

  validateInput() {
    console.log(this.state.username);
  },

  render() {
    return (
      <Paper zDepth={1} id="register">
        <div>
          <Paper zDepth={1} style={RegisterTitleStyle}>
            <h1>Register</h1>
            <p id="errorTextField" style={errorMsgstyle}></p>
          </Paper>
          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeUsername}
            value={this.state.username}
            className="RegisterInput"
            hintText="Max"
            floatingLabelText="Benutzername"
            type="text"
            id="usernameField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeName}
            value={this.state.name}
            className="RegisterInput"
            hintText="Max"
            floatingLabelText="name"
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
            hintText="Max"
            floatingLabelText="lastname"
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
            hintText="Max"
            floatingLabelText="password"
            type="password"
            id="passwordField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangePasswordrep}
            value={this.state.passwordrep}
            className="RegisterInput"
            hintText="Max"
            floatingLabelText="password Repeat"
            type="password"
            errorText={this.state.passwordrepErrMsg}
            id="passwordRepField"
          /><br />

          <RaisedButton
            onTouchTap={this.handleSubmit}
            style={registerButtonStyle}
            overlayStyle={registerButtonOverlayStyle}
            labelStyle={registerButtonlabelStyle}
            onTouchTap={this.validateInput}
            id="registerButton"
            type="register"
            label="Register"
          />
        </div>
      </Paper>
    );
  }
});

module.exports = Register;
