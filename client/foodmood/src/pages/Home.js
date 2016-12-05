import React from 'react';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const content = {
  marginLeft: 30,
  lineHeight: 2,
}

const titleDividerStyle = {
  height: 3,
};


var Home = React.createClass({
  render() {
    return (
      <div className="grid flex">
        <Paper className="col_12">
          <header>
            <h1 style={titleStyle}>FoodMood</h1>
            <Divider style={titleDividerStyle}/>
          </header>
          <div style={content}>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </Paper>
      </div>
    );
  }
});

module.exports = Home;
