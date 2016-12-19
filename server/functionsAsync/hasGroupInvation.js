function hasGroupInvation(userID, groupID, callbackFunc, sqlconnection) {
  sqlconnection.query('SELECT 1 FROM `groupinvite` WHERE `userID` = ? AND `groupID` = ?', [userID, groupID], function(err, results) {
    if(err) {
      throw err;
    } else {
      if(typeof results[0] === "undefined") {
        callbackFunc(false);
      }
      else {
        callbackFunc(true);
      }
    }
  });


}


module.exports = hasGroupInvation;
