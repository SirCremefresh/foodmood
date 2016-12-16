function addUserToGroup(userID, groupID, admin, callbackFunc, sqlconnection) {
  sqlconnection.query('INSERT INTO `groupsuser`(`userID`, `groupID`, `admin`) VALUES (?,?,?)', [userID, groupID, admin], function(err, results) {
    if(err) {
      throw err;
    } else {
      callbackFunc();
    }
  });
}


module.exports = addUserToGroup;
