// Async
const checkSessionKey         = require('../functionsAsync/checkSessionKey');
const getUserIDBySessionKey   = require('../functionsAsync/getUserIDBySessionKey');
const isMemberOfGroup         = require('../functionsAsync/isMemberOfGroup');
const isGroupMenuAgeValide    = require('../functionsAsync/isGroupMenuAgeValide');
const getGroupMenuPlan        = require('../functionsAsync/getGroupMenuPlan');
const getGroupMenus           = require('../functionsAsync/getGroupMenus');
const generateGroupMenuPlan   = require('../functionsAsync/generateGroupMenuPlan');

//sync



function getMenuPlanAction(groupID, sessionKey, sqlconnection, connection) {
  var GLOBsqlconnection = sqlconnection;
  var GLOBconnection    = connection;
  var GLOBgroupID       = groupID;
  var GLOBsessionKey    = sessionKey;

  checkSessionKey(GLOBsessionKey, getMenuPlanAction2, GLOBsqlconnection);


function getMenuPlanAction2(valid) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, getMenuPlanAction3, GLOBsqlconnection);
  }
}

function getMenuPlanAction3(valid, msg, userID) {
  if (valid) {
    GLOBuserID = userID;

    isMemberOfGroup(GLOBuserID, GLOBgroupID, getMenuPlanAction4, GLOBsqlconnection);
  }
}

function getMenuPlanAction4(valid, msg, userID) {
  if (valid) {
    //IS MENUPLAN VALID
    isGroupMenuAgeValide(GLOBgroupID, getMenuPlanAction5, GLOBsqlconnection);
  }
}

function getMenuPlanAction5(valid, msg) {
  if (valid) {
     //GET MENU PLAN
     getGroupMenuPlan(GLOBgroupID, getMenuPlanAction8, GLOBsqlconnection);
  }
  else {
    //GET GROUP MENUS
    getGroupMenus(GLOBgroupID, getMenuPlanAction6, GLOBsqlconnection);
  }
}

function getMenuPlanAction6(valid, msg, menus) {
  if (valid) {
     //GENERATE
     generateGroupMenuPlan(GLOBgroupID, menus, getMenuPlanAction7, GLOBsqlconnection);
  }
}

function getMenuPlanAction7(valid, msg) {
  if (valid) {
     //GET MENUPLAN
     getGroupMenuPlan(GLOBgroupID, getMenuPlanAction8, GLOBsqlconnection);
  }
}

function getMenuPlanAction8(valid, msg, menuplan) {
  if (valid) {
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "MENUPLAN",
        groupID: GLOBgroupID,
        menuplan: menuplan[0],
      }
    ));
  }
}
}

module.exports = getMenuPlanAction;
