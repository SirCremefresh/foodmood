
var GLOBcallbackFunction;
var GLOBrows;


function getGroups(userID, callbackFunction, sqlconnection) {
  GLOBcallbackFunction = callbackFunction;

  sqlconnection.query('SELECT gu.admin, gu.joinDate , g.* FROM user u inner join groupsuser gu on u.userID = gu.userid inner join groups g on g.groupid = gu.groupid WHERE u.userID = ?', [userID], function(err, rows, result) {
    if(err) {
      callbackFunction(false, "SQL_ERROR");
    }
    else if(typeof rows[0] === 'undefined') {
      callbackFunction(false, "SESSION_NOTFOUND");

    } else {
      GLOBrows = rows;
      var isfinal = false;

      for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].groupID);
        if (i == rows.length - 1) {
          isfinal = true;
        }

        sqlconnection.query('SELECT ? as isfinal, ? as groupindex, gu.admin, gu.joinDate, u.username FROM groupsuser gu inner join user u on gu.userID = u.userid WHERE gu.groupID = ?', [isfinal, i, rows[i].groupID], function(err, rows, result) {
          if(err) {
            console.log(err);
            callbackFunction(false, "SQL_ERROR");
          }
          else if(typeof rows[0] === 'undefined') {
            callbackFunction(false, "SESSION_NOTFOUND");

          } else {
            getGroups2(rows);

          }
        });
      }

    }
  });
}

function getGroups2(userData) {
  console.log(userData[0]);

  GLOBrows[userData[0].groupindex].groupUser = userData;

  if (userData[0].isfinal) {
    console.log("final");
    GLOBcallbackFunction(true, "SESSION_FOUND", GLOBrows);
    console.log(GLOBrows);
  }
}

module.exports = getGroups
