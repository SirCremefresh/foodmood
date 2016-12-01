function isValidSession(sessionKey = '', userID = '', datetime = '', connection) {

  var currentdate = new Date();
  var sessionDate = Date.parse(datetime);

  console.log(currentdate.toString() + sessionDate.toString());

  // connection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_SUCCESS", sessionKey : sessionKey, username : username}));
}
module.exports = isValidSession
