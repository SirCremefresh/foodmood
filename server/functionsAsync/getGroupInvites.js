function getGroupInvites(userID, callbackFunc, sqlconnection) {

  sqlconnection.query('SELECT g.Name, g.groupID, g.Beschreibung FROM user u inner join groupinvite gi on u.userID = gi.userID inner join groups g on g.groupid = gi.groupid WHERE u.userID = ?', [userID], function(err, rows) {
    if(err) {
      throw err;
    } else if(typeof rows[0] === 'undefined') {
      callbackFunc(false, "NO_GROUP_INVITES");

    } else {
      callbackFunc(true, "GROUP_INVITES", rows);

    }
  });
}


module.exports = getGroupInvites;
