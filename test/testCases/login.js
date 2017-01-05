
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();
var connection;

function send(obj) {
    if (connection.connected) {
        connection.sendUTF(JSON.stringify(obj));
    } else {
      console.log('not connected');
    }
}

function login() {
  client.connect('ws://192.168.100.20:4367/', 'echo-protocol');


  client.on('connect', function(conn) {
      connection = conn;


      connection.on('message', function(message) {
        if (message.type === 'utf8') {
          var data = JSON.parse(message.utf8Data);

          switch (data.type) {
            case "MESSAGE":
              break;
            default:
          }
        }
      });
  });
}
