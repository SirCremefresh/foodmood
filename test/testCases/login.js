var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();
var connection;

var checksum = 0;

function send(obj) {
    if (connection.connected) {
        connection.sendUTF(JSON.stringify(obj));
    } else {
      console.log('not connected');
    }
}

function login() {
  client.connect('ws://localhost:61910/', 'echo-protocol');

  client.on('connect', function(conn) {
      connection = conn;
      send({
        type: "LOGIN",
        username: "Pot",
        password: "Pot",
      });

      setTimeout(function() {
        send({
          type: "LOGIN",
          username: "Pot",
          password: "Pott",
        });
      }, 500);




      connection.on('message', function(message) {
        if (message.type === 'utf8') {
          var data = JSON.parse(message.utf8Data);

          switch (data.type) {
            case "LOGIN_SUCCESS":
              checksum = checksum + 1;
              break;
            case "LOGIN_ERROR":
              checksum = checksum + 2;
              check();
              break;
            default:
          }
        }
      });
  });
}

function check() {
  if (checksum === 3) {
    console.log("Login works");
  } else {
    console.log("Login fail");
  }
}


login();
