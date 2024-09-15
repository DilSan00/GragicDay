import { makeAutoObservable } from "mobx";

interface Time {
  hour: number;
  minute: number;
}

interface Item {
  id: number;
  title: string;
  time: Time;
  color: string;
}

class ContentStore {
  items: Item[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addGrafic(item: Item) {
    this.items.push(item);
  }

  removeGraifc(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  moveGrafic(fromIndex: number, toIndex: number) {
    if (
      fromIndex < 0 ||
      fromIndex >= this.items.length ||
      toIndex < 0 ||
      toIndex >= this.items.length
    ) {
      return;
    }
    const [movedItem] = this.items.splice(fromIndex, 1);
    this.items.splice(toIndex, 0, movedItem);
  }
}

const contentStore = new ContentStore();
export default contentStore;
