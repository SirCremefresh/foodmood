const getNewUUID = require('./uuid-generate');

function loginAction(data, sqlconnection, connection) {
  var user = data.username;
  var password = data.password;

  sqlconnection.query('SELECT * FROM `user` WHERE `username` = ? AND `password` = ?', [user, password], function(err, rows, result) {
    if(err) {
      connection.sendUTF(JSON.stringify({type : "SQL_ERROR", content : "NO SUCH USER"}));

    } else if (typeof rows[0] == 'undefined') {
      connection.sendUTF(JSON.stringify({type : "LOGIN_ERROR", content : "NO SUCH USER"}));

    } else {
      getNewUUID(connection.remoteAddress, connection, sqlconnection, rows);
    }
  });
}

module.exports = loginAction
