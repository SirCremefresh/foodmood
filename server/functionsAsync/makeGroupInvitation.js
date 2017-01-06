function makeGroupInvitation(userID, groupID, callbackFunc, sqlconnection) {
  sqlconnection.query('INSERT INTO `groupinvite`(`userID`, `groupID`) VALUES (?, ?)', [userID, groupID], function(err, results) {
    if(err) {
      callbackFunc(false);
      throw err;
    } else {
      callbackFunc(true);
    }
  });


}


module.exports = makeGroupInvitation;
