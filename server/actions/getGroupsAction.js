// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const checkSessionKey = require('../functionsAsync/checkSessionKey');
const getGroups = require('../functionsAsync/getGroups');

const getMenuPlanAction = require('./getMenuPlanAction');

var GLOBsqlconnection;
var GLOBconnection;

var GLOBsessionKey;
/*
*
*  Gets callded after LoginAction and sessionLoginActionon and getGroupsACTION
*
*/
function getGroupsAction(sessionKey, sqlconnection, connection) {
  GLOBsqlconnection= sqlconnection;
  GLOBconnection= connection;

  GLOBsessionKey = sessionKey;

  checkSessionKey(GLOBsessionKey, getGroupsAction2, GLOBsqlconnection);
}

function getGroupsAction2(valid, report) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, getGroupsAction3, GLOBsqlconnection);
  } else {
    GLOBconnection.sendUTF(JSON.stringify({type : "SESSION_ERROR", content : "NO SUCH SESSIONKEY"}));
  }
}

function getGroupsAction3(valid, report, userID) {
  if (valid) {
    getGroups(userID, getGroupsAction4, GLOBsqlconnection);
  } else {
    GLOBconnection.sendUTF(JSON.stringify({type : "SESSION_ERROR", content : "NO SUCH SESSIONKEY"}));
  }
}

function getGroupsAction4(valid, report, userData) {
  if (valid) {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "USER_GROUPS",
        groups: userData,
      }
    ));


    for (group of userData) {

        var groupID = group["groupID"];

        getMenuPlanAction(groupID, GLOBsessionKey, GLOBsqlconnection, GLOBconnection)


    }
  }
}



module.exports = getGroupsAction;
