// Async

//sync


var GLOBsqlconnection;
var GLOBconnection;


function registerNewUserAction(userInfo, sqlconnection, connection) {
  GLOBsqlconnection= sqlconnection;
  GLOBconnection= connection;


}


module.exports = registerNewUserAction;
