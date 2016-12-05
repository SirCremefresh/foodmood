import React from 'react';

const contentStyle = {
  marginTop: 65,
};

var Content = React.createClass({
  render() {
    return (
      <div id="content" style={contentStyle}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Content;
