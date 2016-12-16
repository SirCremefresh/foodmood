import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class GroupInformationStore extends EventEmitter {
  constructor() {
    super()
    this.groups = [];
    this.groupsInvites = [];
    this.isLoaded = false;
  }

  setGroups(newgroups) {
    this.groups = newgroups;
    this.isLoaded = true;
  }

  getGroups() {
    return this.groups;
  }

  setGroupsInvites(newgroupsInvites) {
    this.groupsInvites = newgroupsInvites;
  }

  getGroupsInvites() {
    return this.groupsInvites;
  }

  getGroupWithID(groupID) {
    for (var group of this.groups) {
      if (group.groupID == groupID) {
        return group;
      }
    }
  }

  getIsLoaded() {
    return this.isLoaded;
  }

  getUsersFromGroupWithID(groupID) {
  var group = this.getGroupWithID(groupID);
  return group.groupUser;
  }

  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line

    switch(action.type) {
      case "USER_GROUPS":
        this.setGroups(action.groups);
        this.emit("newGroups");
        break;
      case "GROUP_INVITES":
        this.setGroupsInvites(action.groupsInvites);
        this.emit("newGroupsIvites");
        break;
    }
  }
}

const groupInformationStore = new GroupInformationStore();
dispatcher.register(groupInformationStore.handleActions.bind(groupInformationStore));

export default groupInformationStore;
