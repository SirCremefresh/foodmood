import React from 'react';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Color from "../../stores/configs/Color";

import HandleDataAction from "../../actions/HandleDataAction";
import LoginInformationStore from "../../stores/LoginInformationStore";

var color = Color.getColor();

const titleDividerStyle = {
  height: 3,
};

const registerButtonOverlayStyle = {
  backgroundColor: color.accentColor,
}

const registerButtonlabelStyle = {
  color: "#fff",
}

const registerButtonStyle = {
  width: "30%",
  marginLeft: "63%",
  marginBottom: "10px",
  marginTop: "10px",
}

const contentStyle = {
  marginLeft: 30,
  marginRight: 30,
};

var Addmenu = React.createClass({
  addMenu() {
    HandleDataAction.sendData({
      type: "NEW_GROUP_MENU",
      value: {
        sessionKey: LoginInformationStore.getSessionKey(),
        groupID: this.props.groupID,
      }
    })

    document.getElementById("menuName").value = "";
    document.getElementById("menuDescription").value = "";
  },

  render() {
    return (
      <div>
        <header>
          <h1 className="contentTitle">Addmdenu</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div style={contentStyle}>
          <TextField
            hintText="Salami"
            floatingLabelText="Menu name"
            id="menuName"
          /><br />
          <TextField
            hintText="Viel Salami"
            floatingLabelText="Beschreibung"
            id="menuDescription"
          /><br />

          <RaisedButton
            onTouchTap={this.handleSubmit}
            style={registerButtonStyle}
            overlayStyle={registerButtonOverlayStyle}
            labelStyle={registerButtonlabelStyle}
            onTouchTap={this.addMenu}
            id="registerButton"
            type="send"
            label="Add Menu"
          />
        </div>
      </div>
    );
  }
});

module.exports = Addmenu;
