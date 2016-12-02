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

          case "LOGIN_SESSION_SUCCESS":
            dispatcher.dispatch({
              type: "NEW_SESSIONKEY",
              sessionKey: data.sessionKey,
              username: data.username,
              berechtigung: data.berechtigung,
              name: data.name,
              lastname: data.lastname,
              adress: data.adress,
              phone: data.phone,
              mail: data.mail,
              IBAN: data.IBAN,
              status: data.status,
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

  waitForConnection (callback, interval) {
      if (client.readyState === 1) {
          callback();
      } else {
          var that = this;
          // optional: implement backoff for interval here
          setTimeout(function () {
              that.waitForConnection(callback, interval);
          }, interval);
      }
  };

  send (message, callback) {
    this.waitForConnection(function () {
        client.send(message);
        if (typeof callback !== 'undefined') {
          callback();
        }
    }, 1000);
  };



  sendData(content = '') {
    client.send(JSON.stringify(content));
  }

  onLoadSendData(content = '') {
    this.send(JSON.stringify(content));
  }


}

const handleDataAction = new HandleDataAction();

export default handleDataAction;
