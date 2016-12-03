import { EventEmitter } from "events";

import dispatcher from "../../dispatcher";

// eslint-disable-next-line
var colorTheme = {};

class LoginInformationStore extends EventEmitter {
  constructor() {
    super()
    this.colorTheme = {
      primaryColorDark: "#303F9F",
      primaryColor: "#3F51B5",
      primaryColorLight:  "#C5CAE9",
      primaryColorText:   "#FFFFFF",
      accentColor:         "#FF4081",
      primaryTextColor:   "#212121",
      secondaryTextColor: "#757575",
      dividerColor:        "#BDBDBD",
    }
  }

  getColor() {
    return this.colorTheme;
  }

  setColor(newColor) {
    this.colorTheme = newColor;
  }

  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line
    switch(action.type) {
      case "NEW_COLOR":
        this.setColor(action.colorTheme);
        this.emit("newColor");
        break;
    }
  }
}

const loginInformationStore = new LoginInformationStore();
dispatcher.register(loginInformationStore.handleActions.bind(loginInformationStore));

export default loginInformationStore;
