// Async


var GLOBsqlconnection;
var GLOBconnection;

/*
*
*  Gets callded after LoginAction and sessionLoginActionon and getGroupsACTION
*
*/
function getGroupsAction(sessionKey, sqlconnection, connection) {
  GLOBsqlconnection= sqlconnection;
  GLOBconnection= connection;

  console.log(sessionKey);
}



module.exports = getGroupsAction;
