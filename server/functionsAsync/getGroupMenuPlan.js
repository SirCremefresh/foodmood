/*
 * Fügt der Datenbank einen neuen Eintrag in der Tabelle "menu" ein.
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     menuInformation -> [sessionKey, groupID, menuName, menuDescription], callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, ADDED_MENU_SUCCESSFULLY
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
