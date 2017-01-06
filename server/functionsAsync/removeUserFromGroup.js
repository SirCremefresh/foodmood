function removeUserFromGroup(userID, groupID, callbackFunc, sqlconnection) {

  sqlconnection.query('DELETE FROM `groupsuser` WHERE `userID` = ? AND `groupID` = ?', [userID, groupID], function(err, results) {
    if(err) {
      callbackFunc(false);
      throw err;
    } else {
      callbackFunc(true);
    }
  });

}


module.exports = removeUserFromGroup;
