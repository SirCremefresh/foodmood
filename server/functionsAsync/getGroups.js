function getGroups(userID, callbackFunction, sqlconnection) {
  sqlconnection.query('SELECT gu.admin, gu.joinDate , g.* FROM user u inner join groupsuser gu on u.userID = gu.userid inner join groups g on g.groupid = gu.groupid WHERE u.userID = ?', [userID], function(err, rows, result) {
    if(err) {
      callbackFunction(false, "SQL_ERROR");
    }
    else if(typeof rows[0] === 'undefined') {
      callbackFunction(false, "SESSION_NOTFOUND");

    } else {
      callbackFunction(true, "SESSION_FOUND", rows);
    }
  });
}

module.exports = getGroups
