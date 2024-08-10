import { makeAutoObservable, configure, observable, runInAction, toJS } from "mobx";
import RiskAcceptanceModal from "../components/RiskAcceptance/RiskAcceptanceModal";

configure({
  useProxies: "never",
  enforceActions: "never",
});

class UserStore {
  user = null;
  regForm = true;
  routeLink = "/";
  modalOpen = false;
  messageModal = null;
  arr = [];
  roleTitle = null;
  isAdedRole = false;
  isOpenDefaultSideBar = false;
  investmentAmount = 2500;
  shareholdingPeriod = 1;
  distributedDividend = 0;
  stepsInvestor = false;
  RiskAcceptanceModal = true
  acceptedRisks = false
  lang = "en"
  sessionUser = null
  selectedComponent = null

  //stepTwo
  dateOfBirth = null
  nationality = null
  fullAddress = null
  postalCode = null
  city = null

  // New observables for step three
  employmentStatus = "";
  sourceOfFunds = "";
  netWorth = "";
  annualIncome = "";
  anticipatedAnnualDeposit = "";
  intendedPurpose = "";
  politicallyExposedPerson = "";

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
      isOpenDefaultSideBar: observable,
      investmentAmount: observable,
      shareholdingPeriod: observable,
      distributedDividend: observable,
      stepsInvestor: observable,
      employmentStatus: observable,
      sourceOfFunds: observable,
      netWorth: observable,
      annualIncome: observable,
      anticipatedAnnualDeposit: observable,
      intendedPurpose: observable,
      politicallyExposedPerson: observable,
      dateOfBirth: observable,
      nationality: observable,
      fullAddress: observable,
      postalCode: observable,
      city: observable,
      RiskAcceptanceModal: observable,
      lang: observable,
      sessionUser: observable,
      selectedComponent: observable,
    });
  }

  setUser(user) {
    runInAction(() => {
      this.user = user;
    });
  }

  setField(name, value) {
    runInAction(() => {
      this[name] = value;
    });
    console.log(`Set ${name}: ${value}`);
  }

  handleArr(formData) {
    runInAction(() => {
      const keys = Object.keys(formData);
      keys.forEach((key) => {
        const existingIndex = this.arr.findIndex((item) => item.name === key);
        if (existingIndex !== -1) {
          this.arr[existingIndex].value = formData[key];
        } else {
          this.arr.push({ name: key, value: formData[key] });
        }
      });
      console.log("Данные в store:", toJS(this.arr));
    });
  }

  handleModal(message, open) {
    runInAction(() => {
      this.messageModal = message;
      this.modalOpen = open;
    });
  }

  setRegForm() {
    runInAction(() => {
      this.regForm = false;
    });
  }

  async SetUserInfo() {
    // Your logic here
  }
}

const store = new UserStore();
export default store;
