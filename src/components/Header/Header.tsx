import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { observer } from "mobx-react";
import contentStore from "../../store/ContentStore";

const Header = () => {
  const [totalMinutes, setTotalMinutes] = useState<number>(0);

  const updateTotalMinutes = () => {
    const minutes = contentStore.items.reduce((total, existingItem) => {
      const hours = existingItem.time ? existingItem.time.hour : 0;
      const minutes = existingItem.time ? existingItem.time.minute : 0;
      return total + hours * 60 + minutes;
    }, 0);

    setTotalMinutes(minutes);
  };

  useEffect(() => {
    updateTotalMinutes();
    const intervalId = setInterval(updateTotalMinutes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const totalMinutesInDay = 1440;
  const percentageFilled = (totalMinutes / totalMinutesInDay) * 100;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <header className={styles.header}>
      <h1 className={styles.nameHeader}>Wen Aplication - You Grafic Day</h1>
      <div className={styles.headerTimeFulled}>
        <h2>
          {hours}:{minutes < 10 ? `0${minutes}` : minutes} / 24:00
        </h2>
        <p>{percentageFilled.toFixed(2)}% filled</p>
      </div>
    </header>
  );
};

export default observer(Header);
