import React from 'react';
import Paper from 'material-ui/Paper';

import Color from "../../configs/Color";

const footerStyle = {
  backgroundColor: Color.backgroundColor,
};


var Footer = React.createClass({
  render() {
    return (
      <Paper id="footer" zDepth={3} style={footerStyle}>
        <h1>LKFASJDLKFJ</h1>
      </ Paper>
    );
  }
});

module.exports = Footer;
