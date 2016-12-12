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
      name: "",
      lastname : "",
      adress: "",
      phone : "",
      mail: "",
      status: "",
    };
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
            className="RegisterInput"
            hintText="Max"
            floatingLabelText="Benutzername"
            type="text"
            errorText={this.state.errorMessageUsername}
            id="usernameField"
          /><br />

          <RaisedButton
            onTouchTap={this.handleSubmit}
            style={registerButtonStyle}
            overlayStyle={registerButtonOverlayStyle}
            labelStyle={registerButtonlabelStyle}
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
