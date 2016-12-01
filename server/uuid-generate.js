const uuidV4 = require('uuid/v4');
const uuid = uuidV4();


function getNewUUID(username = '', sqlLoginData = '', remoteAddress = '', userconnection, sqlconnection) {
  // MY SQL THINGS
  var uuid;

  uuid = uuidV4();
  sqlconnection.query('SELECT 1 FROM `session` WHERE `sessionKey` = ?', [uuid], function(err, rows, result) {
    if(err) {
      userconnection.sendUTF(JSON.stringify({type : "LOGIN_SUCCESS", content : uuid}));



    } else if (typeof rows[0] == 'undefined') {

      sqlconnection.query('UPDATE `session` SET sessionKey= ?, ip = ?, datetime = CURRENT_TIMESTAMP WHERE username = ?', [uuid, remoteAddress, username], function(err, results) {
      });

      userconnection.sendUTF(JSON.stringify({type : "LOGIN_SUCCESS", content : uuid}));

    }

  });

}
// einzeln exportieren geht so:
// exports.zahl = zahl
//
// etwas Einzelnes exportiert man so:
// module.exports = myFunction
//
// ich bevorzuge folgendes:
module.exports = getNewUUID
// genau wie bei "export.<etwas>" wird dabei ein Objekt zum exportieren aufgebaut.
