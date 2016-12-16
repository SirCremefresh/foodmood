import React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';

const textfieldStyle = {
  marginLeft: "-15px",
  width: "100%",
};

const multilineTextfieldStyle = {
  width: "100%",
  marginLeft: "-15px",
};

var CustomTextField = React.createClass({
  getInitialState: function() {
    return {
      style : this.props.multiLine === true ? multilineTextfieldStyle : textfieldStyle,
      value : this.props.value,
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  },


  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.id + " -> " + event.target.value);
  },


  render() {
    return (
      <MenuItem
        primaryText={
          <TextField
            hintText={this.props.hintText}
            value={this.state.value || ""}
            style={this.state.style}
            underlineShow={false}
            onChange={this.handleChange}
            multiLine={this.props.multiLine}
            rows={this.props.multiLine ? 2 : 1}
            rowsMax={this.props.multiLine ? 5 : 1}
            id={this.props.id}
            />
        }
        leftIcon={
          <FontIcon
            className="material-icons">
            {this.props.FontIcon}
          </FontIcon>
        }
      />
    );
  }
});

module.exports = CustomTextField;
