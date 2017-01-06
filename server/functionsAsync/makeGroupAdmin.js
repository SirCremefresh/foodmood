function makeGroupAdmin(userID, groupID, callbackFunc, sqlconnection) {

  sqlconnection.query('UPDATE `groupsuser` SET `admin`= 1 WHERE `userID` = ? AND `groupID` = ?', [userID, groupID], function(err, results) {
    if(err) {
      callbackFunc(false);
      throw err;
    } else {
      callbackFunc(true);
    }
  });

}


module.exports = makeGroupAdmin;
