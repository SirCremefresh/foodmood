function removeInvite(userID, groupID, callbackFunc, sqlconnection) {
  sqlconnection.query('DELETE FROM `groupinvite` WHERE `userID` = ? AND `groupID` = ?', [userID, groupID], function(err, results) {
    if(err) {
      throw err;
    } else {
      callbackFunc();
    }
  });
}


module.exports = removeInvite;
