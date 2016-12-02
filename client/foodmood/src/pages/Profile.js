import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const titleDividerStyle = {
  height: 3,
};

const iconStyles = {
  width: 25,
};

const textfieldStyle = {
  marginLeft: "-15px",
};

const multilineTextfieldStyle = {
  marginLeft: 20,
  width: "100%",
  marginLeft: "-15px",
};

var Profile = React.createClass({
  render() {
    return (
    <div className="grid flex">
      <Paper zDepth={1} className="col_4">
        <header>
          <h1 style={titleStyle}>Dein Account</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <main>
          <MenuItem primaryText={<TextField hintText="Vorname" style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >account_box</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Nachname" style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >face</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Adresse" style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >hotel</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Telefonnummer" style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >call</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Email Adresse" style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >email</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="IBAN-Nummer" style={textfieldStyle} underlineShow={false}/>} leftIcon={<FontIcon className="material-icons"  >credit_card</FontIcon>} />
          <Divider />
          <MenuItem primaryText={<TextField hintText="Status" style={multilineTextfieldStyle} underlineShow={false} multiLine={true} rows={2} rowsMax={5}/>} leftIcon={<FontIcon className="material-icons"  >star_rate</FontIcon>} />
          <Divider />
        </main>
      </Paper>
      <Paper zDepth={1} className="col_8">
        <TextField hintText="First name" style={textfieldStyle} underlineShow={false} />
        <Divider />
        <TextField hintText="Middle name" style={textfieldStyle} underlineShow={false} />
        <Divider />
        <TextField hintText="Last name" style={textfieldStyle} underlineShow={false} />
        <Divider />
        <TextField hintText="Email address" style={textfieldStyle} underlineShow={false} />
        <Divider />
      </Paper>
    </div>
    );
  }
});

module.exports = Profile;
