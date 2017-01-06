var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
var i = 0;

function brutal() {
  client.connect('ws://localhost:61910/', 'echo-protocol');

  client.on('connect', function(connection) {
      connection.sendUTF(JSON.stringify({
        type: "LOGIN",
        username: "Pot",
        password: "Pot",
      }));


      connection.on('message', function(message) {
        if (message.type === 'utf8') {
          var data = JSON.parse(message.utf8Data);
          console.log(i);
          i++;
          connection.sendUTF(JSON.stringify({
            type: "LOGIN",
            username: "Pot",
            password: "Pot",
          }));
        }
      });
  });
}

brutal();
