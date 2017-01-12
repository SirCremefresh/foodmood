import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class GroupInformationStore extends EventEmitter {
  constructor() {
    super()
    this.groups = [];
    this.menuplan = [];
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

  setMenuPlan(newmenuplan, groupID) {
    var newMenuplanObject = {
      menuplan: newmenuplan,
      groupID: groupID,
    };
    for (var i = 0; i < this.menuplan.length; i++) {
      var menuObject = this.menuplan[i];
      if (newMenuplanObject.hasOwnProperty("groupID") && menuObject.hasOwnProperty("groupID")) {
        if (newMenuplanObject.groupID == menuObject.groupID) {
          this.menuplan[i] = newMenuplanObject;
          console.log(this.menuplan);
          return;
        }
      }
    }
    this.menuplan.push(newMenuplanObject);
    console.log(this.menuplan);
  }

  isMenuplanLoaded(groupID) {
    for (var i = 0; i < this.menuplan.length; i++) {
      if (this.menuplan[i].groupID == groupID) {
        return true;
      }
    }
    return false;
  }

  getMenuplan(groupID) {
    for (var i = 0; i < this.menuplan.length; i++) {
      if (this.menuplan[i].groupID == groupID) {
        return this.menuplan[i].menuplan;
      }
    }
    return false;
  }

  setGroupsInvites(newgroupsInvites) {
    this.groupsInvites = newgroupsInvites;
  }

  getGroupsInvites() {
    return this.groupsInvites;
  }

  isValidGroupID(groupID) {
    if (this.groups.length >= 1) {
      for (var group of this.groups) {
        if (group.groupID == groupID) {
          return true;
        }
      }
    }
    return false
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

  logout() {
    this.groups = [];
    this.menuplan = [];
    this.groupsInvites = [];
    this.isLoaded = false;
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
      case "NO_GROUP_INVITES":
        this.setGroupsInvites([]);
        this.emit("newGroupsIvites");
        break;
      case "MENUPLAN":
        this.setMenuPlan(action.menuplan, action.groupID);
        this.emit("newMenuplan");
        break;
      case "SIGN_OUT":
        this.logout();
        this.emit("newGroups");
        this.emit("newMenuplan");
        this.emit("newGroupsIvites");
        break;
    }
  }
}

const groupInformationStore = new GroupInformationStore();
dispatcher.register(groupInformationStore.handleActions.bind(groupInformationStore));

export default groupInformationStore;
