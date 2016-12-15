// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const isMemberOfGroup = require('../functionsAsync/isMemberOfGroup');
const addMenu = require('../functionsAsync/addMenu');

// Sync

var GLOBsqlconnection;
var GLOBconnection;

var GLOBmenuInformation;
var GLOBsessionKey;
var GLOBuserID;

function newMenuAction(menuInformation, sqlconnection, connection) {
  GLOBsqlconnection =     sqlconnection;
  GLOBconnection =        connection;

  GLOBmenuInformation =   menuInformation;
  GLOBsessionKey =        menuInformation.sessionKey;

  getUserIDBySessionKey(GLOBsessionKey, newMenuAction2, GLOBsqlconnection);
}

function newMenuAction2(valid, msg, userID) {
  if(valid) {
    GLOBuserID = userID;

    isMemberOfGroup(userID, GLOBmenuInformation.groupID, newMenuAction3, GLOBsqlconnection);
  }
}

function newMenuAction3(isInGroup) {
  if(isInGroup) {
    addMenu(GLOBmenuInformation, newMenuAction4, GLOBsqlconnection);
  }
}

function newMenuAction4(success, msg) {
  if(!success) {
    console.log(msg);
  }
}

module.exports = newMenuAction;
