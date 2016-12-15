
var GLOBsqlconnection;
var GLOBcallbackFunc;


function addMenuToGroup(groupID, menu, callbackFunc, sqlconnection) {
  var title = userInfo["title"];
  var description = userInfo["description"];

  GLOBsqlconnection = sqlconnection;
  GLOBcallbackFunc = callbackFunc;

  GLOBsqlconnection.query('INSERT INTO `menu`( `groupID`, `title`, `description`) VALUES (?, ?, ?)', [groupID, title, description], function(err, results) {
    if(err) {
      throw err;
    } else {
      getUserIDByUsername(username, makeNewUser2, GLOBsqlconnection)
    }
  });
}



module.exports = addMenuToGroup;
