/*
 * Aktualisiert den Datenbankeintrag des Menuplans
 * Bei einem Fehler wird dieser geworfen, anstonsten wird die Callback-Methode aufgerufen
 *
 * @param     groupID, menus -> [[menuID, groupID, title, description]], callbackFunc(Funktionsreferenz), sqlconnection(SQL-Connection Objekt)
 *
 * @return    true, ADDED_MENU_SUCCESSFULLY
 */
function generateGroupMenuPlan(groupID, menus, callbackFunc, sqlconnection) {

  var menusRnd = [];
  for(var i = 0; i < 7; i++) {
    menusRnd[i] = menus[Math.floor((Math.random() * menus.length) + 0)];
  }

  sqlconnection.query('UPDATE `menuplan` SET `week`=?,`monday`=?,`tuesday`=?,`wednesday`=?,`thursday`=?,`friday`=?,`saturday`=?,`sunday`=? WHERE `groupID` = ?', [groupID, getWeekNumber(new Date()), menusRnd[0].menuID, menusRnd[1].menuID, menusRnd[2].menuID, menusRnd[3].menuID, menusRnd[4].menuID, menusRnd[5].menuID, menusRnd[6].menuID, groupID], function(err, results) {
    if(err) {
      throw err;
    } else {
      callbackFunc(true, "GENERATED_MENUPLAN");
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
module.exports = generateGroupMenuPlan;
