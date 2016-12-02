const uuidV4 = require('uuid/v4');
const uuid = uuidV4();

function updateSessionKey(userID, callbackFunc, sqlconnection, connection) {
  var uuid;
  uuid = uuidV4();


  sqlconnection.query('UPDATE `session` SET sessionKey= ?, ip = ?, datetime = CURRENT_TIMESTAMP WHERE `userID` = ?', [uuid, remoteAddress, userID], function(err, results) {
    if(err) {
      throw err;
    } else {

    }
  });

}


module.exports = updateSessionKey;
