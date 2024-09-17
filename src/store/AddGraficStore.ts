import { makeAutoObservable } from "mobx";


class AddGraficStore {
  onModal = false;
  
  constructor() {
    makeAutoObservable(this);
  }

  openModal() {
    this.onModal = true;
  }

  closeModal() {
    this.onModal = false;
  }
}


const addGraficStore = new AddGraficStore();
export default addGraficStore;