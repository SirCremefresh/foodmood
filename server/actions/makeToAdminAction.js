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
const makeGroupAdmin = require('../functionsAsync/makeGroupAdmin');

//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBgroupID;
var GLOBsessionKey;
var GLOBuserID;

var GLOBnewusername;
var GLOBnewUserID

function makeToAdminAction(groupID, sessionKey, username, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;
  GLOBnewusername   = username;

  checkSessionKey(GLOBsessionKey, makeToAdminAction2, GLOBsqlconnection);
}

function makeToAdminAction2(valid) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, makeToAdminAction3, GLOBsqlconnection);
  }
}

function makeToAdminAction3(valid, msg, userID) {
  if (valid) {
    GLOBuserID = userID;
    getUserIDByUsername(GLOBnewusername, makeToAdminAction4, GLOBsqlconnection);
  }
}

function makeToAdminAction4(valid, msg, userID) {
  if (valid) {
    GLOBnewUserID = userID;
    isAdminOfGroup(GLOBuserID, GLOBgroupID, makeToAdminAction5, GLOBsqlconnection);
  }
}

function makeToAdminAction5(valid) {
  if (valid) {
    isMemberOfGroup(GLOBnewUserID, GLOBgroupID, makeToAdminAction6, GLOBsqlconnection);
  }
}

function makeToAdminAction6(valid) {
  if (valid) {
    makeGroupAdmin(GLOBnewUserID, GLOBgroupID, makeToAdminAction7, GLOBsqlconnection)
  }
}


function makeToAdminAction7(valid) {
  if (valid) {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "MAKE_ADMIN_SUCCESS",
      }
    ));
    getGroupsAction(GLOBsessionKey, GLOBsqlconnection, GLOBconnection)
  }
}

module.exports = makeToAdminAction;
