import { makeAutoObservable } from "mobx";

class TimerStore {
  countHour1 = 0;
  countHour2 = 0;
  countMinute1 = 0;
  countMinute2 = 0;

  constructor() {
    makeAutoObservable(this);
  }

  incrementMinute() {
    if (this.countMinute2 < 9) {
      this.countMinute2 += 1;
    } else {
      this.countMinute2 = 0;
      if (this.countMinute1 < 5) {
        this.countMinute1 += 1;
      } else {
        this.countMinute1 = 0;
        this.incrementHour();
      }
    }
  }

  // Метод для декрементации минут
  decrementMinute() {
    if (this.countMinute2 > 0) {
      this.countMinute2 -= 1;
    } else {
      this.countMinute2 = 9;
      if (this.countMinute1 > 0) {
        this.countMinute1 -= 1;
      } else {
        this.countMinute1 = 5;
        this.decrementHour();
      }
    }
  }

  // Метод для инкрементации часов
  incrementHour() {
    if (this.countHour2 < 9) {
      this.countHour2 += 1;
    } else {
      this.countHour2 = 0;
      if (
        this.countHour1 < 2 ||
        (this.countHour1 === 2 && this.countHour2 < 4)
      ) {
        this.countHour1 += 1;
      } else {
        this.countHour1 = 0;
      }
    }
  }

  // Метод для декрементации часов
  decrementHour() {
    if (this.countHour2 > 0) {
      this.countHour2 -= 1;
    } else {
      this.countHour2 = 9;
      if (this.countHour1 > 0) {
        this.countHour1 -= 1;
      } else {
        this.countHour1 = 2;
      }
    }
  }
}

const timerStore = new TimerStore();
export default timerStore;
