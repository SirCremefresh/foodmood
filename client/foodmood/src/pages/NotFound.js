import React from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import Color from "../stores/configs/Color";

var Router = require('react-router');

var color = Color.getColor();

const titleHeadStyle = {
  backgroundColor: color.primaryColor,
  padding: 20,
  color: "#fff"
};

const titleStyle = {
  fontSize: 45,
  margin: 5
};

const subtitleStyle = {
  fontSize: 20,
  margin: 0
};

const textStyle = {
  fontSize: 20,
  margin: "20px 20px 0 20px",
};

const buttonStyle = {
  margin: 20,
  backgroundColor: color.primaryColor,
  color: "#fff"
};

var NotFound = React.createClass({

  redirect() {
    Router.hashHistory.push('/home');
  },
  render() {
    return (
      <Paper zDepth={1} id="pagenotfound">
        <div>
          <Paper zDepth={1} style={titleHeadStyle}>
            <h1 style={titleStyle}>404</h1>
            <h2 style={subtitleStyle}>Seite nicht gefunden</h2>
          </Paper>
          <p style={textStyle}>Die von Ihnen aufgerufene Seite konnte leider nicht gefunden werden.</p>
          <p style={textStyle}>Hier gehts zurück!</p>
        </div>
        <RaisedButton
           label="Zurück"
           style={buttonStyle}
           backgroundColor={color.primaryColorDark}
           labelColor="#fff"
           onTouchTap={this.redirect}
        />
      </Paper>
    );
  }
});

module.exports = NotFound;
