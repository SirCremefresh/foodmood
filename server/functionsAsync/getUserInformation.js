function getUserInformation(userID, callbackFunc, sqlconnection) {
  console.log(userID);
  sqlconnection.query('SELECT *, (SELECT `sessionKey` FROM session WHERE `userID` = ? ) as sessionKey from user WHERE  `userID` = ? ', [userID, userID], function(err, rows, result) {
    if(err) {
      throw err;
      callbackFunc(false, "SQL_ERROR");
    }
    else if(typeof rows[0] === 'undefined') {
      callbackFunc(false, "USER_NOTFOUND");

    } else {
      callbackFunc(true, "USER_FOUND", rows[0])
    }
  });
}


module.exports = getUserInformation;
