/*
 * Fügt einen Spieler einer spezifischen Gruppe hinzu und erstellt in der Datenbank
 * den entsprechenden Eintag bei "groupsuser"
 * Bei einem Fehler wird dieser geworfen, anstonsten die Callback-Methode aufgerufen
 *
 * @param     userID(String), groupID(String), admin(boolean in Form 0 oder 1), callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 */
function addUserToGroup(userID, groupID, admin, callbackFunc, sqlconnection) {
  sqlconnection.query('INSERT INTO `groupsuser`(`userID`, `groupID`, `admin`) VALUES (?,?,?)', [userID, groupID, admin], function(err, results) {
    if(err) {
      throw err;
    } else {
      callbackFunc();
    }
  });
}


module.exports = addUserToGroup;
