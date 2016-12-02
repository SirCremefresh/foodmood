import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class LoginInformationStore extends EventEmitter {
  constructor() {
    super()

  }


  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line

    // switch(action.type) {
    //
    // }
  }
}

const loginInformationStore = new LoginInformationStore();
dispatcher.register(loginInformationStore.handleActions.bind(loginInformationStore));

export default loginInformationStore;
