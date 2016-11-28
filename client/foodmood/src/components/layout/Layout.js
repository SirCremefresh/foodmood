import React from 'react';

var Layout = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Layout;
