// Async
const doesUserExist = require('../functionsAsync/doesUserExist');

//sync


var GLOBsqlconnection;
var GLOBconnection;
var GLOBusername;


function isUsernameTakenAction(username, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;
  GLOBusername      = username;

  doesUserExist(username, isUsernameTakenAction2, GLOBsqlconnection);
}

function isUsernameTakenAction2(result) {
  if(result == 0) {
    GLOBconnection.sendUTF(JSON.stringify({type : "USER_TAKEN", userTaken : false}));
  }
  else {
    GLOBconnection.sendUTF(JSON.stringify({type : "USER_TAKEN", userTaken : true}));
  }
}
module.exports = isUsernameTakenAction;
