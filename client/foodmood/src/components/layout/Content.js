import React from 'react';

var Content = React.createClass({
  render() {
    return (
      <div id="content">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Content;
