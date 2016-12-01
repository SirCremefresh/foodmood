import dispatcher from "../dispatcher";
var W3CWebSocket = require('websocket').w3cwebsocket;
var client = new W3CWebSocket('ws://localhost:61910/', 'echo-protocol');
var Router = require('react-router');

class HandleDataAction {
  constructor() {
    client.onerror = function() {
        console.log('Connection Error');
    };

    client.onopen = function() {
        console.log('WebSocket Client Connected');
        // var data = {
        //   type:"LOGIN",
        //   username:"DonatoPot",
        //   password:"Donato"
        // };
        //
        // client.send(JSON.stringify(data));

    };

    client.onclose = function() {
        console.log('echo-protocol Client Closed');
    };

    client.onmessage = function(e) {
      if (typeof e.data === 'string') {
        var data = JSON.parse(e.data);
        console.log(data);
        switch (data.type) {
          case "LOGIN_SUCCESS":
            Router.browserHistory.push('/home');
            dispatcher.dispatch({
              type: "NEW_MESSAGE",
              content: data.content,
              sessionid: data.sessionid
            });
            break;
          case "LOGIN_ERROR":
            dispatcher.dispatch({
              type: "LOGIN_ERROR",
            });
            break;
          default:

        }
      }
    };
  }


  sendData(content = '') {
    client.send(JSON.stringify(content));
  }


}

const handleDataAction = new HandleDataAction();

export default handleDataAction;
