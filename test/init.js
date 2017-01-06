var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();
var connection;

client.connect('ws://192.168.100.20:4367/', 'echo-protocol');

function send(obj) {
    if (connection.connected) {
        connection.sendUTF(JSON.stringify(obj));
    } else {
      console.log('not connected');
    }
}

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(conn) {
  connection = conn;
    console.log('WebSocket Client Connected');
    initialize();
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });

    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });

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
