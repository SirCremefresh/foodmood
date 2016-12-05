import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Color from "../stores/configs/Color";


var color = Color.getColor();

const loginTitleStyle = {
  backgroundColor: color.primaryColor,
  padding: 10,
  color: "#fff"
};


var Register = React.createClass({
  render() {
    return (
      <Paper zDepth={1} id="login">
        <div>
          <Paper zDepth={1} style={loginTitleStyle}>
            <h1>Register</h1>
          </Paper>
        </div>
      </Paper>
    );
  }
});

module.exports = Register;
