/*
 * Überprüft ob ein Menuplan noch gültig ist für diese Woche.
 * Nach dem Überprüfen werden die Callback-Methode aufgerufen
 *
 * @param     groupID(int), callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    false, NO_MENUPLAN_FOUND  -> Der Menuplan wurde nicht gefunden
 *            false, MENUPLAN_EXPIRED   -> Der Menuplan ist nicht von dieser Woche und somit nicht mehr gültig
 *            true, VALID_MENU_DATE     -> Der Menuplan ist noch gültig für diese Woche
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
      else if(!(getWeekNumber(new Date()) == results[0].week)) {
        callbackFunc(false, "MENUPLAN_EXPIRED");
      }
      else {
        callbackFunc(true, "VALID_MENU_DATE");
      }
    }
  });
}

// Code zum herausfinden der Woche
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0,0,0,0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getFullYear(), weekNo];
}

module.exports = isGroupMenuAgeValide;
