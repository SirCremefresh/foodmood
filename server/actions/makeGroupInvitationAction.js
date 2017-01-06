// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const removeInvite = require('../functionsAsync/removeInvite');
const addUserToGroup = require('../functionsAsync/addUserToGroup');
const getGroupsAction = require('./getGroupsAction');
const getGroupInvitesAction = require('./getGroupInvitesAction');
const getUserIDByUsername = require('../functionsAsync/getUserIDByUsername');
const isAdminOfGroup = require('../functionsAsync/isAdminOfGroup');
const hasGroupInvation = require('../functionsAsync/hasGroupInvation');
const makeGroupInvitation = require('../functionsAsync/makeGroupInvitation');
const checkSessionKey = require('../functionsAsync/checkSessionKey');
const isMemberOfGroup = require('../functionsAsync/isMemberOfGroup');


//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBgroupID;
var GLOBsessionKey;
var GLOBuserID;

var GLOBnewusername;
var GLOBnewUserID;

function makeGroupInvitationAction(groupID, sessionKey, username, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;
  GLOBnewusername   = username;

  checkSessionKey(GLOBsessionKey, makeGroupInvitationAction2, GLOBsqlconnection);
}

function makeGroupInvitationAction2(valid) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, makeGroupInvitationAction3, GLOBsqlconnection);
  }
}

function makeGroupInvitationAction3(valid, msg, userID) {
  if (valid) {
    GLOBuserID = userID;
    getUserIDByUsername(GLOBnewusername, makeGroupInvitationAction4, GLOBsqlconnection);
  }
}

function makeGroupInvitationAction4(valid, msg, userID) {
  if (valid) {
    GLOBnewUserID = userID;
    isAdminOfGroup(GLOBuserID, GLOBgroupID, makeGroupInvitationAction5, GLOBsqlconnection);
  }
}

function makeGroupInvitationAction5(valid) {
  if (valid) {
    isMemberOfGroup(GLOBnewUserID, GLOBgroupID, makeGroupInvitationAction6, GLOBsqlconnection);
  }
}

function makeGroupInvitationAction6(valid) {
  if (valid == false) {
    hasGroupInvation(GLOBnewUserID, GLOBgroupID, makeGroupInvitationAction7, GLOBsqlconnection)
  }
}

function makeGroupInvitationAction7(valid) {
  if (valid == false) {
    makeGroupInvitation(GLOBnewUserID, GLOBgroupID, makeGroupInvitationAction8, GLOBsqlconnection)
  }
}

function makeGroupInvitationAction8(valid) {
  if (valid) {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "INVITE_SUCCESS",
      }
    ));
  }
}

module.exports = makeGroupInvitationAction;
