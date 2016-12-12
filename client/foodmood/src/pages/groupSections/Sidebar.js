import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

import FontIcon from 'material-ui/FontIcon';

const titleStyle = {
  fontSize: 30,
  marginLeft: 30,
};

const titleDividerStyle = {
  height: 3,
};

var Sidebar = React.createClass({
  changeContentState(content){
    this.props.changeContentState(content);
  },

  render() {
    var adminStuff = "";

    if(this.props.admin == "1") {
      adminStuff = <div>
                    <Divider />
                    <List>
                      <Subheader>Erweiterte Einstellungen</Subheader>
                      <ListItem onTouchTap={this.changeContentState.bind(this, "menuSettings")} primaryText="Menü" leftIcon={<FontIcon className="material-icons">shopping_cart</FontIcon>} />
                      <ListItem onTouchTap={this.changeContentState.bind(this, "billsSettings")} primaryText="Rechnungen" leftIcon={<FontIcon className="material-icons">credit_card</FontIcon>} />
                      <ListItem onTouchTap={this.changeContentState.bind(this, "userSettings")} primaryText="Nutzer" leftIcon={<FontIcon className="material-icons">accessibility</FontIcon>} />
                      <ListItem onTouchTap={this.changeContentState.bind(this, "settings")} primaryText="Allgemeine Einstellungen" leftIcon={<FontIcon className="material-icons">settings</FontIcon>} />
                    </List>
                  </div>;
    }

      return (
        <Paper className="col_3">
          <header>
            <h1 style={titleStyle}>{this.props.groupName}</h1>
            <Divider style={titleDividerStyle}/>
          </header>
          <div>
            <List>
              <ListItem onTouchTap={this.changeContentState.bind(this, "menu")} primaryText="Menüplan" leftIcon={ <FontIcon className="material-icons">class</FontIcon>} />
              <ListItem onTouchTap={this.changeContentState.bind(this, "bills")} primaryText="Rechnungen" leftIcon={ <FontIcon className="material-icons">attach_money</FontIcon>} />
              <ListItem onTouchTap={this.changeContentState.bind(this, "addmenu")} primaryText="Menü hinzufügen" leftIcon={ <FontIcon className="material-icons">note_add</FontIcon>} />
              <ListItem onTouchTap={this.changeContentState.bind(this, "informations")} primaryText="Informationen" leftIcon={ <FontIcon className="material-icons">info</FontIcon>} />
            </List>
            {adminStuff}
          </div>
        </Paper>
      );
  }
});

module.exports = Sidebar;
