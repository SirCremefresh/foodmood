import dispatcher from "../dispatcher";


class SignOutAction {
  signOut() {
    dispatcher.dispatch({
      type: "SIGN_OUT",
    });
  }
}

const signOutAction = new SignOutAction();

export default signOutAction;
