// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const removeInvite = require('../functionsAsync/removeInvite');
const addUserToGroup = require('../functionsAsync/addUserToGroup');
const getGroupsAction = require('./getGroupsAction');
const getGroupInvitesAction = require('./getGroupInvitesAction');
const getUserIDByUsername = require('./getUserIDByUsername');
const isAdminOfGroup = require('./isAdminOfGroup');



//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBgroupID;
var GLOBsessionKey;
var GLOBuserID;

var GLOBnewusername;
var GLOBnewUserID

function addUserToGroup(groupID, sessionKey, username, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;
  GLOBnewusername   = username;

  checkSessionKey(GLOBsessionKey, addUserToGroup2, GLOBsqlconnection);
}

function addUserToGroup2(valid) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, addUserToGroup2, GLOBsqlconnection);
  }
}

function addUserToGroup3(valid, msg, userID) {
  if (valid) {
    GLOBuserID = userID;
    getUserIDByUsername(GLOBnewusername, addUserToGroup4, GLOBsqlconnection);
  }
}

function addUserToGroup4(valid, msg, userID) {
  if (valid) {
    GLOBnewUserID = userID;
    isAdminOfGroup(GLOBuserID, GLOBgroupID, addUserToGroup5, GLOBsqlconnection);
  }
}

function addUserToGroup5(valid) {
  if (valid) {
// isnt't already in group
// hasn't already got an invite
  }
}

module.exports = addUserToGroup;
