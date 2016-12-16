import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class LoginInformationStore extends EventEmitter {
  constructor() {
    super()
    this.userInformation = {
      adress:"",
      berechtigung:"",
      lastname:"",
      mail:"",
      name:"",
      phone:"",
      status:"",
      username: "",
    };
    this.sessionKey = 0;
    this.logedIn = false;
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

  setUserInformation(newUserInformation) {
    this.userInformation = newUserInformation;
    this.logedIn = true;
  }

  getUserInformation() {
    return this.userInformation;
  }

  getUsername() {
    return this.userInformation.username;
  }

  setsessionKey(newsessionKey) {
    this.sessionKey = newsessionKey;
    setCookie("sessionKey", this.sessionKey, 2);
  }

  getSessionKey() {
    return this.sessionKey;
  }

  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line
    switch(action.type) {
      case "NEW_SESSIONKEY":
        this.setsessionKey(action.sessionKey);
        this.setUserInformation(action);
        this.setLogedInToTrue();
        this.emit("newUserInformation");
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
