//REQUIRE Actions
const loginAction = require('./actions/loginAction');
const sessionLoginAction = require('./actions/sessionLoginAction');
const getGroupsAction = require('./actions/getGroupsAction');


// VARIABLES FOR LATER USE
var port = 61910;

var sqlHost = 'localhost';
var sqlUser = 'activeuser';
var sqlPassword = 'activeuser';
var sqlDatabase = 'foodmood';

/*
 *    OPEN DATABASE CONNECTION
 */
var mysql = require('mysql');
var sqlconnection = mysql.createConnection({
  host     : sqlHost,
  user     : sqlUser,
  password : sqlPassword,
  database : sqlDatabase
});
sqlconnection.connect(function(err) {
  if (err) {
    console.error((new Date()) + ' | MYSQL | Connection error: ' + err.stack);
    return;
  }

  console.log((new Date()) + ' | MYSQL | Connection successful with server ' + sqlHost + ':' + port);
});

/*
 *    OPEN WEBSOCKET CONNECTION
 */
var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' | WEBSOCKET | Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(port, function() {
    console.log((new Date()) + ' | WEBSOCKET | Server is listening on port ' + port);
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}


/*
 *    START WEBSOCKET APPLICATION
 */
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' | WEBSOCKET | Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    /*
     *    ON SUCCESSFULL CONNECTION
     */
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' | WEBSOCKET | Connection accepted from: ' + connection.remoteAddress);

    /*
     *    ON RECIVE MESSAGE
     */
    connection.on('message', function(message) {

      var data = JSON.parse(message.utf8Data);

        if (message.type === 'utf8') {

          switch (data.type) {
            case 'LOGIN':
                loginAction(data.username, data.password, sqlconnection, connection);
              break;
            case "LOGIN_SESSION":
                sessionLoginAction(data.sessionKey, sqlconnection, connection);
              break;
            case "GET_GROUPS":
                getGroupsAction(data.sessionKey, sqlconnection, connection);
              break;
          }

        }
    });


    // /*
    //  *    ON CLOSE CONNECTION
    //  */
    // connection.on('close', function(reasonCode, description) {
    //
    //   /*   MAKE DATABASE ENTRY */
    //     // MAKE A DATABASE ENTRY WITH THE USER-IP, SESSION-ID AND THE ACTION
    //     // IN THIS CASE THE ACTION IS DISCONNECT, WHICH IS CALLED WHEN THE CLIENT DISCONNECTS
    //     sqlconnection.query('INSERT INTO useractivity ( sessionid, userip, action) VALUES (?,?,?)',[session_id, connection.remoteAddress, "disconnect"], function(err, results) {
    //
    //       if (err) {
    //         console.error((new Date()) + ' | MYSQL | Writing to database error: ' + err.stack);
    //         return;
    //       }
    //
    //       console.log((new Date()) + ' | MYSQL | Logged closed connection successfully to database! UserIP:' + connection.remoteAddress);
    //     });
    //   console.log((new Date()) + ' | WEBSOCKET | Client ' + connection.remoteAddress + ' disconnected.');
    // });

});
