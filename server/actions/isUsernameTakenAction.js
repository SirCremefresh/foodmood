// Async
const doesUserExist = require('../functionsAsync/doesUserExist');

//sync


var GLOBsqlconnection;
var GLOBconnection;


function isUsernameTakenAction(username, sqlconnection, connection) {
  GLOBsqlconnection = sqlconnection;
  GLOBconnection    = connection;

  doesUserExist("pot", quit, GLOBsqlconnection);


  return true;
}

function quit() {
  console.log("lala");
}
module.exports = isUsernameTakenAction;
