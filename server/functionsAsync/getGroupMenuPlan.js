/*
 * Fügt der Datenbank einen neuen Eintrag in der Tabelle "menu" ein.
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     menuInformation -> [sessionKey, groupID, menuName, menuDescription], callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, ADDED_MENU_SUCCESSFULLY
 */
function addMenu(menuInformation, callbackFunc, sqlconnection) {

  sqlconnection.query('INSERT INTO `menu`(`groupID`, `title`, `description`) VALUES (?,?,?)', [menuInformation.groupID,menuInformation.menuName,menuInformation.menuDescription], function(err, results) {
    if(err) {
      throw err;
    }
    else {
      callbackFunc(true, "ADDED_MENU_SUCCESSFULLY");
    }
  });
}


module.exports = addMenu;
