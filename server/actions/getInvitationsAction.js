






SELECT g.Name, g.groupID, g.Beschreibung FROM user u inner join groupinvite gi on u.userID = gi.userID inner join groups g on g.groupid = gi.groupid WHERE u.userID = 1
