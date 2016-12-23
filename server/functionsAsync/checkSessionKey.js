const checkSessionDate = require('../functionssync/checkSessionDate');

function checkSessionKey(sessionKey, callbackFunction, sqlconnection) {
  sqlconnection.query('SELECT `datetime` FROM `session` WHERE `sessionKey` = ?', [sessionKey], function(err, rows, result) {
  //IDEA:  WHERE timestamp >= DATE_SUB(CURDATE(), INTERVAL 1 DAY) AND timestamp < CURDATE()
    if(err) {
      callbackFunction(false, "SQL_ERROR");
    }
    else if(typeof rows[0] === 'undefined') {
      callbackFunction(false, "SESSION_NOTFOUND");

    } else {

      if (checkSessionDate(rows[0]["datetime"])) {
        callbackFunction(true, "SESSION_FOUND");
      } else {
        callbackFunction(false, "SESSION_EXPIRED");
      }
    }
  });
}

module.exports = checkSessionKey
