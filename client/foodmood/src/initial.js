import injectTapEventPlugin from 'react-tap-event-plugin';
import getCookie from "./util/getCookie"
import HandleDataAction from "./actions/HandleDataAction"

function initial() {
  injectTapEventPlugin();


  HandleDataAction.onLoadSendData({type: "LOGIN_SESSION", sessionKey: getCookie("sessionKey")});

}

module.exports = initial;
