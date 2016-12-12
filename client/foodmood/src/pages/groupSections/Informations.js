import React from 'react';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const titleDividerStyle = {
  height: 3,
};

const subTitleStyle = {
  fontSize: 20,
};

const contentStyle = {
  marginLeft: 30,
  marginRight: 30,
};

const buttonStyle = {
  marginTop: 30,
  marginRight: 30,
  marginBottom: 15,
};

var Informations = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1 className="contentTitle">Informationen</h1>
          <Divider style={titleDividerStyle}/>
        </header>
        <div style={contentStyle}>
          <h2>Beschreibung</h2>
          <p>{this.props.groupDescription}</p>
          <h2>Mitglieder</h2>
            <Table
              height="400px"
              fixedHeader={true}
            >
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
              >
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Seit</TableHeaderColumn>
                  <TableHeaderColumn>Administrator</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
              >
                <TableRow>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>08.02.2016</TableRowColumn>
                  <TableRowColumn>Ja</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>08.02.2016</TableRowColumn>
                  <TableRowColumn>Ja</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>08.02.2016</TableRowColumn>
                  <TableRowColumn>Ja</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>08.02.2016</TableRowColumn>
                  <TableRowColumn>Ja</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>08.02.2016</TableRowColumn>
                  <TableRowColumn>Ja</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>08.02.2016</TableRowColumn>
                  <TableRowColumn>Ja</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>14.08.2016</TableRowColumn>
                    <TableRowColumn>Ja</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>09.03.2016</TableRowColumn>
                    <TableRowColumn>Nein</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Steve Brown</TableRowColumn>
                  <TableRowColumn>28.09.2016</TableRowColumn>
                  <TableRowColumn>Nein</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <RaisedButton label="Gruppe verlassen" secondary={true} fullWidth={true} style={buttonStyle}/>
        </div>
      </div>
    );
  }
});

module.exports = Informations;
