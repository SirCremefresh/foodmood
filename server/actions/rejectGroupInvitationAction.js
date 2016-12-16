// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const removeInvite = require('../functionsAsync/removeInvite');
const getGroupInvitesAction = require('./getGroupInvitesAction');

//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBgroupID;
var GLOBsessionKey;
var GLOBuserID;

function rejectGroupInvitationAction(groupID, sessionKey, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;

  getUserIDBySessionKey(sessionKey, rejectGroupInvitationAction2, GLOBsqlconnection)
}

function rejectGroupInvitationAction2(valid, msg, userID) {
  if(valid) {
    GLOBuserID      = userID;

    removeInvite(GLOBuserID, GLOBgroupID, rejectGroupInvitationAction3, GLOBsqlconnection);
  }
  else {
    console.log("ERROR IN REJECTGROUPINVITATION! Error code: " + msg);
  }
}

function rejectGroupInvitationAction3() {
  getGroupInvitesAction(GLOBsessionKey, GLOBsqlconnection, GLOBconnection);
}
module.exports = rejectGroupInvitationAction;
