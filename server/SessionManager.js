function isValidSession(sessionKey = '', userID = '', datetime = '', connection, sqlconnection) {

  var currentdate = new Date();
  currentdate.setDate(currentdate.getDate() -2);

  var sessionDate = new Date(Date.parse(datetime));

  if(sessionDate >= currentdate) {
    sqlconnection.query('SELECT `username` FROM `user` WHERE `user-id` = ?', [userID], function(err, rows, result) {
      connection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_SUCCESS", sessionKey : sessionKey, username : rows[0]["username"]}));
    });
  }
  else {
    connection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_ERROR", content : "SESSIONKEY EXPIRED"}));
  }
}
module.exports = isValidSession
