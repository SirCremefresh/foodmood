import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class RegistrationStore extends EventEmitter {
  constructor() {
    super()
    this.isUsernameTaken = false;
  }

  setIsUsernameTaken(value) {
    this.isUsernameTaken = value;
  }

  getIsUsernameTaken() {
    return this.isUsernameTaken;
  }


  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line
    switch(action.type) {
      case "USER_TAKEN":
        this.setIsUsernameTaken(action.userTaken);
        this.emit("userTaken");
        break;
    }
  }
}

const registrationStore = new RegistrationStore();
dispatcher.register(registrationStore.handleActions.bind(registrationStore));

export default registrationStore;
