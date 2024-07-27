import { makeAutoObservable, configure, observable, runInAction, toJS } from "mobx";


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
  arr = []
  roleTitle = null
  isAdedRole = false
  isOpenDefaultSideBar = false
  investmentAmount = 2500
  shareholdingPeriod = 1
  distributedDividend =  0
  stepsInvestor = true

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      regForm: observable,
      routeLink: observable,
      modalOpen: observable,
      messageModal: observable,
      arr: observable,
      roleTitle: observable,
      isAdedRole: observable,
      isOpenDefaultSideBar:observable,
      investmentAmount: observable,
      shareholdingPeriod: observable,
      distributedDividend: observable,
      stepsInvestor: observable,
    });
  }

  setUser(user) {
    runInAction(() => {
      this.user = user;
    });
  }




  handleArr(formData) {
    const keys = Object.keys(formData);
    keys.forEach(key => {
      const existingIndex = this.arr.findIndex(item => item.name === key);
      if (existingIndex !== -1) {
        this.arr[existingIndex].value = formData[key];
      } else {
        this.arr.push({ name: key, value: formData[key] });
      }
    });
    console.log("Данные в store:", toJS(this.arr));
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
