import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class GroupInformationStore extends EventEmitter {
  constructor() {
    super()
    this.groups = [];
  }

  setGroups(newgroups) {
    this.groups = newgroups;
  }

  getGroups() {
    return this.groups;
  }

  getGroupWithID(groupID) {
    for (var group of this.groups) {
      if (group.groupID == groupID) {
        return group;
      }
    }
  }

  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line

    switch(action.type) {
      case "USER_GROUPS":
        this.setGroups(action.groups);
        this.emit("newGroups");
        break;
    }
  }
}

const groupInformationStore = new GroupInformationStore();
dispatcher.register(groupInformationStore.handleActions.bind(groupInformationStore));

export default groupInformationStore;
