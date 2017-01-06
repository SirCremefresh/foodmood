// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const isMemberOfGroup = require('../functionsAsync/isMemberOfGroup');
const getGroupsAction = require('./getGroupsAction');

//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBuserID;
var GLOBgroupID;
var GLOBsessionKey;

function userLeaveGroupAction(sessionKey, groupID, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;

  getUserIDBySessionKey(sessionKey, userLeaveGroup2, GLOBsqlconnection);
}

function userLeaveGroup2(valid, msg, userID) {
  if(valid) {
    GLOBuserID        = userID;

    isMemberOfGroup(GLOBuserID, GLOBgroupID, userLeaveGroup3, GLOBsqlconnection);
  }
}

function userLeaveGroup3(isMember) {
  if(isMember) {
    GLOBsqlconnection.query('DELETE FROM `groupsuser` WHERE `userID` = ? AND `groupID` = ?', [GLOBuserID, GLOBgroupID], function(err, results) {
      if(err) {
        throw err;
      } else {
        getGroupsAction(GLOBsessionKey, GLOBsqlconnection, GLOBconnection);
      }
    });
  }
}

module.exports = userLeaveGroupAction;
