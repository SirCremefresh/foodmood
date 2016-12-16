// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const checkSessionKey = require('../functionsAsync/checkSessionKey');
const getGroupInvites = require('../functionsAsync/getGroupInvites');



var GLOBsqlconnection;
var GLOBconnection;

var GLOBsessionKey;
/*
*
*  Gets callded after LoginAction and sessionLoginActionon and getGroupsACTION
*
*/
function getGroupInvitesAction(sessionKey, sqlconnection, connection) {
  GLOBsqlconnection= sqlconnection;
  GLOBconnection= connection;

  GLOBsessionKey = sessionKey;

  checkSessionKey(GLOBsessionKey, getGroupInvitesAction2, GLOBsqlconnection);
}

function getGroupInvitesAction2(valid, report) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, getGroupInvitesAction3, GLOBsqlconnection);
  } else {
    GLOBconnection.sendUTF(JSON.stringify({type : "SESSION_ERROR", content : "NO SUCH SESSIONKEY"}));
  }
}

function getGroupInvitesAction3(valid, report, userID) {
  if (valid) {
    getGroupInvites(userID, getGroupInvitesAction4, GLOBsqlconnection)
  } else {
    GLOBconnection.sendUTF(JSON.stringify({type : "NO_GROUP_INVITES", content : "NO Group Invites"}));
  }
}

function getGroupInvitesAction4(valid, report, userData) {
  if (valid) {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "GROUP_INVITES",
        groupsInvites: userData,
      }
    ));
  } else {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "NO_GROUP_INVITES",
      }
    ));
  }
}



module.exports = getGroupInvitesAction;
