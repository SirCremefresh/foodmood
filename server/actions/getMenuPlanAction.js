// Async
const checkSessionKey = require('../functionsAsync/checkSessionKey');
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const isMemberOfGroup = require('../functionsAsync/isMemberOfGroup');


//sync

var GLOBsqlconnection;
var GLOBconnection;
var GLOBgroupID;
var GLOBsessionKey;
var GLOBuserID;

function getMenuPlanAction(groupID, sessionKey, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBgroupID       = groupID;
  GLOBsessionKey    = sessionKey;

  checkSessionKey(GLOBsessionKey, getMenuPlanAction2, GLOBsqlconnection);
}

function getMenuPlanAction2(valid) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, getMenuPlanAction3, GLOBsqlconnection);
  }
}

function getMenuPlanAction3(valid, msg, userID) {
  if (valid) {
    GLOBuserID = userID;

    isMemberOfGroup(GLOBnewUserID, GLOBgroupID, getMenuPlanAction4, GLOBsqlconnection);
  }
}

function getMenuPlanAction4(valid, msg, userID) {
  if (valid) {
    //GET MENU PLAN

  }
}

function getMenuPlanAction5(valid) {
  if (valid) {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "INVITE_SUCCESS",
      }
    ));
  }
}

module.exports = getMenuPlanAction;
