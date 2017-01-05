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
const removeUserFromGroup = require('../functionsAsync/removeUserFromGroup');

//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBgroupID;
var GLOBsessionKey;
var GLOBuserID;

var GLOBnewusername;
var GLOBnewUserID

function removeUserFromGroupAction(groupID, sessionKey, username, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;
  GLOBnewusername   = username;

  checkSessionKey(GLOBsessionKey, removeUserFromGroupAction2, GLOBsqlconnection);
}

function removeUserFromGroupAction2(valid) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, removeUserFromGroupAction3, GLOBsqlconnection);
  }
}

function removeUserFromGroupAction3(valid, msg, userID) {
  if (valid) {
    GLOBuserID = userID;
    getUserIDByUsername(GLOBnewusername, removeUserFromGroupAction4, GLOBsqlconnection);
  }
}

function removeUserFromGroupAction4(valid, msg, userID) {
  if (valid) {
    GLOBnewUserID = userID;
    isAdminOfGroup(GLOBuserID, GLOBgroupID, removeUserFromGroupAction5, GLOBsqlconnection);
  }
}

function removeUserFromGroupAction5(valid) {
  if (valid) {
    isMemberOfGroup(GLOBnewUserID, GLOBgroupID, removeUserFromGroupAction6, GLOBsqlconnection);
  }
}

function removeUserFromGroupAction6(valid) {
  if (valid) {
    removeUserFromGroup(GLOBnewUserID, GLOBgroupID, removeUserFromGroupAction7, GLOBsqlconnection)
  }
}


function removeUserFromGroupAction7(valid) {
  if (valid) {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "REMOVE_USER_SUCSESS",
      }
    ));
    getGroupsAction(GLOBsessionKey, GLOBsqlconnection, GLOBconnection)
  }
}

module.exports = removeUserFromGroupAction;
