// Async
const getUserIDBySessionKey = require('../functionsAsync/getUserIDBySessionKey');
const getUserInformation = require('../functionsAsync/getUserInformation');


var GLOBsqlconnection;
var GLOBconnection;

function sessionLoginAction(sessionKey, sqlconnection, connection) {
  GLOBsqlconnection= sqlconnection;
  GLOBconnection= connection;

  getUserIDBySessionKey(sessionKey, sessionLoginAction2, GLOBsqlconnection);
}

function sessionLoginAction2(valid, report, userID) {
  if (valid) {
    getUserInformation(userID, sessionLoginAction3, GLOBsqlconnection)
  }
}

function sessionLoginAction3(valid, report, userData) {
  if (valid) {
    console.log(userData);
    GLOBconnection.sendUTF(JSON.stringify(
      {
        type : "LOGIN_SUCCESS",
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
