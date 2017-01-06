function makeGroup(groupName, groupDescription, callbackFunc, sqlconnection) {
  sqlconnection.query('INSERT INTO `groups`(`Name`, `Beschreibung`) VALUES (?,?);', [groupName, groupDescription], function(err, results) {
    if(err) {
      callbackFunc(false, "YOU_GONA_DIE");
      throw err;
    } else {
      callbackFunc(true, "GROUP_WAS_INSERTED");
    }
  });


}


module.exports = makeGroup;
