import styles from "./Main.module.css";
import MainItem from "../MainItem/MainItem";
import { observer } from "mobx-react-lite";
import contentStore from "../../store/ContentStore";

const Main = observer(() => {
  const items = contentStore.items;

  return (
    <main className={styles.main}>
      <ul className={styles.mainList}>
        {items.map((item, index) => {
          return (
            <MainItem
              key={item.id}
              id={item.id}
              title={item.title}
              time={{ hour: item.time.hour, minute: item.time.minute }}
              bgColor={item.color}
              index={index}
            ></MainItem>
          );
        })}
      </ul>
    </main>
  );
});

export default Main;
