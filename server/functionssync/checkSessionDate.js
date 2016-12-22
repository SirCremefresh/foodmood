/*
 * Überprüft ob das angegebene Sessiondatum noch gültig ist
 *  - Wenn das Datum älter als 2 TAge ist, gilt es als abgeloffen
 *  - Wenn es neuer als 2 Tage oder genau 2 Tage alt ist, ist es nocht gültig
 *
 * @param     Erstellungsdatum der zu überprüfenden Session(datetime)
 *
 * @return    true wenn das Sessiondatum noch gültig ist,
 *            false wenn die Session abgeloffen ist
 */
function checkSessionDate(datetime) {

  var currentdate = new Date();
  currentdate.setDate(currentdate.getDate() -2);

  var sessionDate = new Date(Date.parse(datetime));

  if(sessionDate >= currentdate) {
    return true;
  }
  else {
    return false;
  }
}
module.exports = checkSessionDate;
