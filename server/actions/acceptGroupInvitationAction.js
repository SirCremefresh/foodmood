// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const removeInvite = require('../functionsAsync/removeInvite');
const addUserToGroup = require('../functionsAsync/addUserToGroup');
const getGroupsAction = require('./getGroupsAction');
const getGroupInvitesAction = require('./getGroupInvitesAction');

//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBgroupID;
var GLOBsessionKey;
var GLOBuserID;

function acceptGroupInvitationAction(groupID, sessionKey, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;

  getUserIDBySessionKey(sessionKey, acceptGroupInvitationAction2, GLOBsqlconnection)
}

function acceptGroupInvitationAction2(valid, msg, userID) {
  if(valid) {
    GLOBuserID      = userID;

    removeInvite(GLOBuserID, GLOBgroupID, acceptGroupInvitationAction3, GLOBsqlconnection);
  }
  else {
    console.log("ERROR IN REJECTGROUPINVITATION! Error code: " + msg);
  }
}

function acceptGroupInvitationAction3() {
  addUserToGroup(GLOBuserID, GLOBgroupID, 0, acceptGroupInvitationAction4, GLOBsqlconnection)
}

function acceptGroupInvitationAction4() {
  getGroupsAction(GLOBsessionKey, GLOBsqlconnection, GLOBconnection);
  getGroupInvitesAction(GLOBsessionKey, GLOBsqlconnection, GLOBconnection);
}
module.exports = acceptGroupInvitationAction;
