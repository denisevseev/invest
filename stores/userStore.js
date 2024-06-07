
import { makeAutoObservable } from 'mobx';

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
    console.log('!!!!!')
  }
}

const store = new UserStore();
export default store;
            