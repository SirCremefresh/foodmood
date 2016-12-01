import injectTapEventPlugin from 'react-tap-event-plugin';
import getCookie from "./util/getCookie"
import HandleDataAction from "./actions/HandleDataAction"

injectTapEventPlugin();


HandleDataAction.onLoadSendData({type: "LOGIN_SESSION", sessionKey: getCookie("sessionKey")});
