import React from 'react';


var Group = React.createClass({
  render() {
    return (
      <div>
        <h1>{this.props.params.id}</h1>
        <p>Text</p>
      </div>
    );
  }
});

module.exports = Group;
