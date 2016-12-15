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
