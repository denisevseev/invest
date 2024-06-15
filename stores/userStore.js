import { makeAutoObservable, configure, observable, runInAction } from "mobx";

configure({
  useProxies: "never",
  enforceActions: "never",
});

class UserStore {
  user = null;
  regForm = true;
  routeLink = "/"

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      regForm: observable,
      routeLink: observable,
    });
  }

  setUser(user) {
    runInAction(() => {
      this.user = user;
    });
  }

  setRegForm() {
    runInAction(() => {
      this.regForm = false;
    });
  }

  async SetUserInfo() {

  }
}

const store = new UserStore();
export default store;
