// Async
const validateUser = require('../functionsAsync/validateUser');
const getUserID = require('../functionsAsync/getUserID');
const updateSessionKey = require('../functionsAsync/updateSessionKey');

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
  getUserID(GLOBusername, GLOBpassword, loginAction3, GLOBsqlconnection, GLOBconnection)
}

function loginAction3(valid, report, userID) {
  GLOBuserID = userID
  GLOBsessionKey = generateSessionKey();

}

module.exports = loginAction;
