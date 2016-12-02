import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class LoginInformationStore extends EventEmitter {
  constructor() {
    super()
    this.sessionKey = 0;
    this.logedIn = false;
    this.username = "";
  }

  signOut() {
    this.sessionKey = 0;
    this.logedIn = false;
    this.username = "";

    setCookie("sessionKey", "", 0);

    this.emit("newsessionKey");
    this.emit("loginState");
  }

  setLogedInToTrue() {
    this.logedIn = true;
  }

  setLogedInToFalse() {
    this.logedIn = false;
  }

  getlogedInState() {
    return this.logedIn;
  }

  setUsername(newUsername) {
    this.username = newUsername;
  }

  getUsername() {
    return this.username;
  }

  setsessionKey(newsessionKey) {
    this.sessionKey = newsessionKey;
    setCookie("sessionKey", this.sessionKey, 2);
  }

  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line
    switch(action.type) {
      case "NEW_SESSIONKEY":
        this.setsessionKey(action.sessionKey);
        this.setUsername(action.username);
        this.setLogedInToTrue();
        this.emit("newsessionKey");
        this.emit("loginState");
        break;
      case "LOGIN_ERROR":
        this.emit("loginError");
        break;
      case "LOGOUT":
        this.setLogedInToFalse()
        this.emit("loginState");
        break;
      case "SIGN_OUT":
        this.signOut();
        break;
    }
  }
}

const loginInformationStore = new LoginInformationStore();
dispatcher.register(loginInformationStore.handleActions.bind(loginInformationStore));

export default loginInformationStore;
