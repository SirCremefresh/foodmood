function updateSessionKey(userID, sessionKey, callbackFunc, sqlconnection, connection) {
  var remoteAddress = connection.remoteAddress;
  sqlconnection.query('UPDATE `session` SET sessionKey= ?, ip = ?, datetime = CURRENT_TIMESTAMP WHERE `userID` = ?', [sessionKey, remoteAddress, userID], function(err, results) {
    if(err) {
      throw err;
    } else {
      callbackFunc();
    }
  });
}


module.exports = updateSessionKey;
