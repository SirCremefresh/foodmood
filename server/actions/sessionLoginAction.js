// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const getUserInformation = require('../functionsAsync/getUserInformation');
const checkSessionKey = require('../functionsAsync/checkSessionKey');


var GLOBsqlconnection;
var GLOBconnection;

var GLOBsessionKey;

function sessionLoginAction(sessionKey, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection = connection;

  GLOBsessionKey = sessionKey;

  checkSessionKey(GLOBsessionKey, sessionLoginAction2, GLOBsqlconnection);
}

function sessionLoginAction2(valid, report) {
  if (valid) {
    getUserIDBySessionKey(GLOBsessionKey, sessionLoginAction3, GLOBsqlconnection);
  } else {
    GLOBconnection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_ERROR", content : "NO SUCH SESSIONKEY"}));
  }
}

function sessionLoginAction3(valid, report, userID) {
  if (valid) {
    getUserInformation(userID, sessionLoginAction4, GLOBsqlconnection)
  }
}

function sessionLoginAction4(valid, report, userData) {
  if (valid) {
    console.log(userData);
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "LOGIN_SESSION_SUCCESS",
        sessionKey : userData["sessionKey"],
        username : userData["username"],
        berechtigung: userData["berechtigung"],
        name: userData["name"],
        lastname: userData["lastname"],
        adress: userData["adress"],
        phone: userData["phone"],
        mail: userData["mail"],
        IBAN: userData["IBAN"],
        status: userData["status"],
      }
    ));

  } else {
    console.log(report);
  }
}


module.exports = sessionLoginAction;
