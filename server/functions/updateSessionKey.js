function updateSessionKey(userID, sessionKey, sqlconnection, connection) {
  remoteAddress = connection.remoteAddress;
  sqlconnection.query('UPDATE `session` SET sessionKey= ?, ip = ?, datetime = CURRENT_TIMESTAMP WHERE `userID` = ?', [sessionKey, remoteAddress, userID], function(err, results) {
    if(err) {
      throw err;
    }
  });

}


module.exports = updateSessionKey;
