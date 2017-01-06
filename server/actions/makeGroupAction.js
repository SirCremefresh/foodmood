// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const removeInvite = require('../functionsAsync/removeInvite');
const addUserToGroup = require('../functionsAsync/addUserToGroup');
const getGroupsAction = require('./getGroupsAction');
const makeGroupInvitationAction = require('./makeGroupInvitationAction');
const getUserIDByUsername = require('../functionsAsync/getUserIDByUsername');
const isAdminOfGroup = require('../functionsAsync/isAdminOfGroup');
const hasGroupInvation = require('../functionsAsync/hasGroupInvation');
const makeGroupInvitation = require('../functionsAsync/makeGroupInvitation');
const checkSessionKey = require('../functionsAsync/checkSessionKey');
const isMemberOfGroup = require('../functionsAsync/isMemberOfGroup');
const removeUserFromGroup = require('../functionsAsync/removeUserFromGroup');
const makeGroup = require('../functionsAsync/makeGroup');
const getGroupIDbyGroupName = require('../functionsAsync/getGroupIDbyGroupName');
const setupMenuPlan = require('../functionsAsync/setupMenuPlan');
const addAdminUserToGroup = require('../functionsAsync/addAdminUserToGroup');


//sync

var GLOBsqlconnection      = {};
var GLOBconnection         = {};

var GLOBuserID             = "";
var GLOBsessionKey         = "";

var GLOBgroupID            = "";
var GLOBgroupDescription   = "";
var GLOBgroupName          = "";
var GLOBusernames          = [];

function makeGroupAction(sessionKey, groupName, groupDescription, usernames, sqlconnection, connection) {
  GLOBsqlconnection    = sqlconnection;
  GLOBconnection       = connection;

  GLOBsessionKey       = sessionKey;

  GLOBgroupName        = groupName;
  GLOBgroupDescription = groupDescription;
  GLOBusernames        = usernames;


  checkSessionKey(GLOBsessionKey, makeGroupAction2, GLOBsqlconnection);
}

function makeGroupAction2(valid) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, makeGroupAction3, GLOBsqlconnection);
  }
}

function makeGroupAction3(valid, msg, userID) {
  if (valid) {
    GLOBuserID = userID;
    makeGroup(GLOBgroupName, GLOBgroupDescription, makeGroupAction4, GLOBsqlconnection)
  }
}

function makeGroupAction4(valid, msg) {
  if (valid) {
    getGroupIDbyGroupName(GLOBgroupName, makeGroupAction5, GLOBsqlconnection);
  }
}

function makeGroupAction5(valid, msg, groupID) {
  if (valid) {
    GLOBgroupID = groupID;
    setupMenuPlan(GLOBgroupID, makeGroupAction6, GLOBsqlconnection);
  }
}

function makeGroupAction6(valid, msg) {
  if (valid) {
    addAdminUserToGroup(GLOBgroupID, GLOBuserID, makeGroupAction7, GLOBsqlconnection)
  }
}


function makeGroupAction7(valid, msg) {
  getGroupsAction(GLOBsessionKey, GLOBsqlconnection, GLOBconnection);
  for (user of GLOBusernames) {
    makeGroupInvitationAction(GLOBgroupID, GLOBsessionKey, user, GLOBsqlconnection, GLOBconnection);
  }
}

module.exports = makeGroupAction;
