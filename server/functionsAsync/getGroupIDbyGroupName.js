/*
 * Lädt den GRUPe Menuplan einer Gruppe aus der Datenbank.
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     groupID, callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, MENUPLAN, menuplan[]
 *            false, NO_MENUPLAN_FOUND
 */
function getGroupIDbyGroupName(groupName, callbackFunc, sqlconnection) {

  sqlconnection.query('SELECT `groupID` FROM `groups` WHERE `Name` = ?', [groupName], function(err, results) {
    if(err) {
      throw err;
    }
    else if(typeof results[0] === 'undefined') {
      callbackFunc(false, "NO_SUCH_GROUP");

    } else {
      callbackFunc(true, "GROUP_FOUND", results[0].groupID);
    }

  });
}


module.exports = getGroupIDbyGroupName;
