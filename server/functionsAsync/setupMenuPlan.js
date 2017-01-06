/*
 * Lädt den GRUPe Menuplan einer Gruppe aus der Datenbank.
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     groupID, callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, MENUPLAN, menuplan[]
 *            false, NO_MENUPLAN_FOUND
 */
function setupMenuPlan(groupID, callbackFunc, sqlconnection) {

  sqlconnection.query('INSERT INTO `menuplan` (`groupID`, `week`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`) VALUES (?, 0,0,0,0,0,0,0,0)',[groupID], function(err, results) {

    if(err) {
      throw err;
    } else {
      callbackFunc(true, "GROUP_FOUND");
    }

  });
}

module.exports = setupMenuPlan;
