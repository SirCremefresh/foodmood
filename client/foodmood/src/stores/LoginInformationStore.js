import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class LoginInformationStore extends EventEmitter {
  constructor() {
    super()
    this.userInformation = {};
    this.sessionKey = 0;
    this.logedIn = false;
    this.username = "";
    this.berechtigung = "";
    this.name = "";
    this.lastname = "";
    this.adress = "";
    this.phone = "";
    this.mail = "";
    this.IBAN = "";
    this.status = "";
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
    this.logedIn = newUserInformation.logedIn;
    this.username = newUserInformation.username;
    this.berechtigung = newUserInformation.berechtigung;
    this.name = newUserInformation.name;
    this.lastname = newUserInformation.lastname;
    this.adress = newUserInformation.adress;
    this.phone = newUserInformation.phone;
    this.mail = newUserInformation.mail;
    this.IBAN = newUserInformation.IBAN;
    this.status = newUserInformation.status;
  }

  getUserInformation() {
    return this.userInformation;
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
