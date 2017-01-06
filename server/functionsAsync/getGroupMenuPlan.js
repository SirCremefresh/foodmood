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

  sqlconnection.query('SELECT m1.description as MontagD, m1.title as MontagT, m2.description as DienstagD, m2.title as DienstagT, m3.description as MitwochD, m3.title as MitwochT, m4.description as DonnerstagD, m4.title as DonnerstagT, m5.description as FreitagD, m5.title as FreitagT, m6.description as SamstagD, m6.title as SamstagT, m7.description as SonntagD, m7.title as SonntagT from menuplan mp inner join menu m1 on mp.monday = m1.menuID inner join menu m2 on mp.tuesday = m2.menuID inner join menu m3 on mp.wednesday = m3.menuID inner join menu m4 on mp.thursday = m4.menuID inner join menu m5 on mp.friday = m5.menuID inner join menu m6 on mp.saturday = m6.menuID inner join menu m7 on mp.sunday = m7.menuID WHERE mp.groupID = ?', [groupID], function(err, results) {

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
