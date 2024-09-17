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
    this.loadFromLocalStorage();
  }

  addGrafic(item: Item) {
    // Рассчитываем общее количество минут с учетом нового элемента
    const newTotalMinutes = this.items.reduce((total, existingItem) => {
      const hours = existingItem.time ? existingItem.time.hour : 0;
      const minutes = existingItem.time ? existingItem.time.minute : 0;
      return total + (hours * 60) + minutes;
    }, 0) + (item.time.hour * 60) + item.time.minute;
  
    // Добавляем элемент, если общее количество минут не превышает 1440
    if (newTotalMinutes <= 1440) {
      this.items.push(item);
      this.saveToLocalStorage();
    } else {
      alert('Cannot add item. Total Minutes would exceed 1440.');
    }
  }

  removeGraifc(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.saveToLocalStorage();
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
    this.saveToLocalStorage();
  }

  // Сохранение данных в LOCAL STORAGE ;)
  saveToLocalStorage() {
    localStorage.setItem('contentStoreItems', JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    const savedItems = localStorage.getItem('contentStoreItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }
}

const contentStore = new ContentStore();
export default contentStore;
