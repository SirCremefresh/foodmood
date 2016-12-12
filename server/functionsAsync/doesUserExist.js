function doesUserExist(username, callbackFunc, sqlconnection) {

  sqlconnection.query('SELECT count(*) AS "amount" FROM `user` WHERE `username` = ?', [username], function(err, results) {
    if(err) {
      throw err;
    } else {
      callbackFunc(results[0].amount);
    }
  });
}


module.exports = doesUserExist;
