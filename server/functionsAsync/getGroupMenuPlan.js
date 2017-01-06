/*
 * Lädt den aktuellen Menuplan einer Gruppe aus der Datenbank.
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     groupID, callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, MENUPLAN, menuplan[]
 *            false, NO_MENUPLAN_FOUND
 */
function getGroupMenuPlan(groupID, callbackFunc, sqlconnection) {

  sqlconnection.query('SELECT * FROM `menuplan` WHERE `groupID` = ?', [groupID], function(err, results) {

    if(err) {
      throw err;
    }
    else if(typeof results[0] === 'undefined') {
      callbackFunc(false, "NO_MENUPLAN_FOUND");

    } else {
      callbackFunc(true, "MENUPLAN", results);
    }

  });
}


module.exports = getGroupMenuPlan;
