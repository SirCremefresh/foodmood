/*
 * Lädt den GRUPe Menuplan einer Gruppe aus der Datenbank.
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     groupID, callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, MENUPLAN, menuplan[]
 *            false, NO_MENUPLAN_FOUND
 */
function addAdminUserToGroup(groupID, userID, callbackFunc, sqlconnection) {

  sqlconnection.query('INSERT INTO `groupsuser`(`userID`, `groupID`, `admin`) VALUES (?, ?, 1)', [userID, groupID], function(err, results) {

    if(err) {
      throw err;
    } else {
      callbackFunc(true, "GROUP_FOUND");
    }

  });
}


module.exports = addAdminUserToGroup;
