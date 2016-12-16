function isMemberOfGroup(userID, groupID, callbackFunc, sqlconnection) {
  sqlconnection.query('SELECT `admin` FROM `groupsuser` WHERE `userID` = ? AND `groupID` = ?', [userID, groupID], function(err, results) {
    if(err) {
      throw err;
    } else {
      if(results[0].admin == 1) {
        callbackFunc(true);
      }
      else {
        callbackFunc(false);
      }
    }
  });
}


module.exports = isMemberOfGroup;
