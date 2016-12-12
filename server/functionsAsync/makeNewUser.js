//Async
const getUserIDByUsername = require('./getUserIDByUsername');
//sync
const generateSessionKey = require('../functionsSync/generateSessionKey');

var GLOBsqlconnection;
var GLOBcallbackFunc;


function makeNewUser(userInfo, callbackFunc, sqlconnection) {
  var username = userInfo["username"];
  var password = userInfo["password"];
  var name = userInfo["name"];
  var lastname = userInfo["lastname"];

  GLOBsqlconnection = sqlconnection;
  GLOBcallbackFunc = callbackFunc;

  GLOBsqlconnection.query('INSERT INTO `user`(`username`, `password`, `name`, `lastname`) VALUES (?, ?, ?, ?)', [username, password, name, lastname], function(err, results) {
    if(err) {
      throw err;
    } else {
      getUserIDByUsername(username, makeNewUser2, GLOBsqlconnection)
    }
  });
}

function makeNewUser2(valid, report, userID) {
  if (valid) {
    GLOBsqlconnection.query('INSERT INTO `session`(`userID`, `sessionKey`, `ip`) VALUES (?, ?, ?)', [userID, generateSessionKey(), "1"], function(err, results) {
      if(err) {
        throw err;
      } else {
        GLOBcallbackFunc();
      }
    });
  }
}


module.exports = makeNewUser;
