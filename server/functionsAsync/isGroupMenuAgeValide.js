/*
 * Überprüft ob ein
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     menuInformation -> [sessionKey, groupID, menuName, menuDescription], callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, ADDED_MENU_SUCCESSFULLY
 */
function isGroupMenuAgeValide(groupID, callbackFunc, sqlconnection) {

  sqlconnection.query('SELECT `week` FROM `menuplan` WHERE `groupID` = ?', [groupID], function(err, results) {
    if(err) {
      throw err;
    }
    else {
      if(results == [] || typeof results == "undefined") {
        callbackFunc(false, "NO_MENUPLAN_FOUND");
      }
      else if() {
        
      }
      else {
        callbackFunc(true, "VALID_MENU_DATE");
      }
    }
  });
}


module.exports = isGroupMenuAgeValide;
