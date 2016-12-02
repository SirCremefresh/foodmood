function isValidSession(sessionKey = '', userID = '', datetime = '', connection, sqlconnection) {

  var currentdate = new Date();
  currentdate.setDate(currentdate.getDate() -2);

  var sessionDate = new Date(Date.parse(datetime));

  if(sessionDate >= currentdate) {
    sqlconnection.query('SELECT * FROM `user` WHERE `user-id` = ?', [userID], function(err, rows, result) {
      connection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_SUCCESS",
                                        sessionKey : sessionKey,
                                        username : rows[0]["username"],
                                        berechtigung: rows[0]["berechtigung"],
                                        name: rows[0]["name"],
                                        lastname: rows[0]["lastname"],
                                        adress: rows[0]["adress"],
                                        phone: rows[0]["phone"],
                                        mail: rows[0]["mail"],
                                        IBAN: rows[0]["IBAN"],
                                        status: rows[0]["status"],
                                        }));
    });
  }
  else {
    connection.sendUTF(JSON.stringify({type : "LOGIN_SESSION_ERROR", content : "SESSIONKEY EXPIRED"}));
  }
}
module.exports = isValidSession
