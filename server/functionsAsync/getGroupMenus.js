/*
 * Lädt die Menus einer Gruppe mit der GruppenID und gibt diese zurück.
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     groupID(int), callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    false, NO_MENUS_FOUND       -> Keine Menus gefunden mit dieser GruppenID
 *            true, MENUS_FOUND, results  -> Die gefundenen Menus als Array
 */
function getGroupMenus(groupID, callbackFunc, sqlconnection) {

  sqlconnection.query('SELECT * FROM `menu` WHERE `groupID` = ?', [groupID], function(err, results) {

    if(err) {
      throw err;
    }
    else if(typeof results[0] === 'undefined') {
      callbackFunc(false, "NO_MENUS_FOUND");

    } else {
      callbackFunc(true, "MENUS_FOUND", results);
    }

  });
}


module.exports = getGroupMenus;
