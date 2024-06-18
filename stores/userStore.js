import { makeAutoObservable, configure, observable, runInAction } from "mobx";

configure({
  useProxies: "never",
  enforceActions: "never",
});

class UserStore {
  user = null;
  regForm = true;
  routeLink = "/"
  modalOpen = false
  messageModal = null

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      regForm: observable,
      routeLink: observable,
      modalOpen: observable,
      messageModal: observable
    });
  }

  setUser(user) {
    runInAction(() => {
      this.user = user;
    });
  }

  handleModal (message, open){
    this.messageModal = message
    this.modalOpen = open
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
