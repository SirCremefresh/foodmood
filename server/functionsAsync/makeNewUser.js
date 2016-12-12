function makeNewUser(userInfo, callbackFunc, sqlconnection) {
  var username = userInfo["username"];
  var password = userInfo["password"];
  var name = userInfo["name"];
  var lastname = userInfo["lastname"];
  
  sqlconnection.query('INSERT INTO `user`(`username`, `password`, `name`, `lastname`, `adress`, `phone`, `mail`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [username, password, name, lastname, adress, phone, mail, status], function(err, results) {
    if(err) {
      throw err;
    } else {
      callbackFunc();
    }
  });
}


module.exports = makeNewUser;
