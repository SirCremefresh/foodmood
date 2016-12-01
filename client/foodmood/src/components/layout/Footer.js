import React from 'react';
import Paper from 'material-ui/Paper';

import Color from "../../stores/configs/Color";

var color = Color.getColor();

const footerStyle = {
  backgroundColor: color.primaryColor,
  color: color.primaryColorText,
};


var Footer = React.createClass({
  render() {
    return (
      <Paper id="footer" zDepth={3} style={footerStyle}>
        <p>Copyright (c) 2016 Copyright Holder All Rights Reserved.</p>
      </Paper>
    );
  }
});

module.exports = Footer;
