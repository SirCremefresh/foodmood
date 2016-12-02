const isValidSession = require('./SessionManager');

function loginSessionAction(data, sqlconnection, connection) {
  var sessionKey = data.sessionKey;
  console.log(sessionKey);
  sqlconnection.query('SELECT `user-id`, `datetime` FROM `session` WHERE `sessionKey` = ?', [sessionKey], function(err, rows, result) {
  //  WHERE timestamp >= DATE_SUB(CURDATE(), INTERVAL 1 DAY) AND timestamp < CURDATE()
    if(err) {
      connection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_ERROR", content : "NO SUCH SESSIONKEY"}));
    }
    else if(typeof rows[0] === 'undefined') {
      connection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_ERROR", content : "NO SUCH SESSIONKEY"}));

    } else {

      var userID = rows[0]["user-id"];
      var datetime = rows[0]["datetime"];

      isValidSession(sessionKey, userID, datetime, connection, sqlconnection);
    }
  });
}

module.exports = loginSessionAction
