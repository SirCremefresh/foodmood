// Async
const validateUser = require('../functionsAsync/validateUser');
const getUserIDByPwdANDUsrname = require('../functionsAsync/getUserIDByPwdANDUsrname');
const updateSessionKey = require('../functionsAsync/updateSessionKey');
const getUserInformation = require('../functionsAsync/getUserInformation');

//sync
const generateSessionKey = require('../functionssync/generateSessionKey');

var GLOBsqlconnection;
var GLOBconnection;

var GLOBusername;
var GLOBpassword;
var GLOBuserID;
var GLOBsessionKey;

function loginAction(username, password, sqlconnection, connection) {
  GLOBsqlconnection= sqlconnection;
  GLOBconnection= connection;

  GLOBusername = username;
  GLOBpassword = password;


  validateUser(GLOBusername, GLOBpassword, loginAction2, GLOBsqlconnection, GLOBconnection);
}

function loginAction2(valid, report) {
  if (valid) {
    getUserIDByPwdANDUsrname(GLOBusername, GLOBpassword, loginAction3, GLOBsqlconnection)
  } else {
    connection.sendUTF(JSON.stringify({type : "LOGIN_ERROR", content : "NO SUCH USER"}));
  }

}

function loginAction3(valid, report, userID) {
  if (valid) {
    GLOBuserID = userID
    GLOBsessionKey = generateSessionKey();
    updateSessionKey(GLOBuserID, GLOBsessionKey, loginAction4, GLOBsqlconnection, GLOBconnection);

  } else {
    console.log(report);
  }

}

function loginAction4() {
  getUserInformation(GLOBuserID, loginAction5, GLOBsqlconnection);
}

function loginAction5(valid, report, userData) {
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

module.exports = loginAction;
