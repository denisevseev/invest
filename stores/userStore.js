import { makeAutoObservable } from 'mobx';

class UserStore {
  user = null;
  r = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setUser() { // Принимаем аргумент user
    // this.user = user; // Устанавливаем значение user
    console.log('!!!!!');
    this.r = 2; // Изменяем значение r
    console.log(this.r);
  }
}

const store = new UserStore();
export default store;
