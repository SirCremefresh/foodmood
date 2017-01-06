import React from 'react';

import Divider from 'material-ui/Divider';

const titleDividerStyle = {
  height: 3,
};


var Bills = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1 className="contentTitle">Rechnungen</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div>
          <p>
            Coming soon!
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Bills;
