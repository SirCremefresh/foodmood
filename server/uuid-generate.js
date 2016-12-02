const uuidV4 = require('uuid/v4');
const uuid = uuidV4();


function getNewUUID(remoteAddress = '', userconnection, sqlconnection, userrows) {
  var uuid;
  uuid = uuidV4();

  sqlconnection.query('SELECT 1 FROM `session` WHERE `sessionKey` = ?', [uuid], function(err, rows, result) {
    if(err) {
      userconnection.sendUTF(JSON.stringify({type : "LOGIN_SUCCESS", content : uuid}));

    } else if (typeof rows[0] == 'undefined') {
      sqlconnection.query('UPDATE `session` SET sessionKey= ?, ip = ?, datetime = CURRENT_TIMESTAMP WHERE `user-id` = ?', [uuid, remoteAddress, userrows[0]["user-id"]], function(err, results) {
        if(err)
          throw err;
      });
      userconnection.sendUTF(JSON.stringify({type : "LOGIN_SUCCESS",
                                            sessionKey : uuid,
                                            username : userrows[0]["username"],
                                            berechtigung: userrows[0]["berechtigung"],
                                            name: userrows[0]["name"],
                                            lastname: userrows[0]["lastname"],
                                            adress: userrows[0]["adress"],
                                            phone: userrows[0]["phone"],
                                            mail: userrows[0]["mail"],
                                            IBAN: userrows[0]["IBAN"],
                                            status: userrows[0]["status"],}));

    }

  });

}
module.exports = getNewUUID
