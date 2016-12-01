const uuidV4 = require('uuid/v4');
const uuid = uuidV4();


function getNewUUID(remoteAddress = '', userconnection, sqlconnection, userID) {
  var uuid;
  uuid = uuidV4();

  sqlconnection.query('SELECT 1 FROM `session` WHERE `sessionKey` = ?', [uuid], function(err, rows, result) {
    if(err) {
      userconnection.sendUTF(JSON.stringify({type : "LOGIN_SUCCESS", content : uuid}));

    } else if (typeof rows[0] == 'undefined') {

      sqlconnection.query('UPDATE `session` SET sessionKey= ?, ip = ?, datetime = CURRENT_TIMESTAMP WHERE user-id = ?', [uuid, remoteAddress, userID], function(err, results) {
      });
      userconnection.sendUTF(JSON.stringify({type : "LOGIN_SUCCESS", content : uuid}));

    }

  });

}
module.exports = getNewUUID
