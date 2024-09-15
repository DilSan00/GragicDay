import React, { useState } from "react";
import styles from "./MainItem.module.css";
import { observer } from "mobx-react-lite";
import { PlayCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import contentStore from "../../store/ContentStore";

interface Time {
  hour: number;
  minute: number;
}

interface MainItemProps {
  id: number;
  title: string;
  time: Time;
  bgColor: string;
  index: number;
}

const MainItem: React.FC<MainItemProps> = observer(({
  id,
  title,
  time,
  bgColor,
  index,
}) => {
  const [isHoveredPlay, setIsHoveredPlay] = useState<boolean>(false);
  const [isHoveredDelete, setIsHoveredDelete] = useState<boolean>(false);

  const outputHeight = () => {
    const totalMinutes = (time.hour * 60 + time.minute);
    const minHeight = 20;
    const maxHeight = 300;
    const minTotalMinutes = 0;
    const maxTotalMinutes = 1435;
    return minHeight +
      ((totalMinutes - minTotalMinutes) / (maxTotalMinutes - minTotalMinutes)) *
      (maxHeight - minHeight);
  };

  return (
    <div
      draggable
      onDragStart={(event) => event.dataTransfer.setData("text/plain", index.toString())}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        const startIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
        if (startIndex !== index) {
          contentStore.moveGrafic(startIndex, index);
        }
      }}
      className={styles.mainItem}
      style={{ height: `${outputHeight()}px`, border: `5px solid ${bgColor}` }}
    >
      <h2 className={styles.mainItemTitle}>{title}</h2>

      <div className={styles.mainTimerContainer}>
        <h2 className={styles.mainItemTime}>
          {`${time.hour}:${time.minute.toString().padStart(2, '0')}`}
        </h2>
        <button
          onMouseEnter={() => setIsHoveredPlay(true)}
          onMouseLeave={() => setIsHoveredPlay(false)}
        >
          <PlayCircleOutlined
            className={styles.mainItemIMG}
            style={{ color: isHoveredPlay ? bgColor : "initial" }}
          />
        </button>
        <button
          onMouseEnter={() => setIsHoveredDelete(true)}
          onMouseLeave={() => setIsHoveredDelete(false)}
          onClick={() => contentStore.removeGraifc(id)}
        >
          <DeleteOutlined
            className={styles.mainItemIMG}
            style={{ color: isHoveredDelete ? bgColor : "initial" }}
          />
        </button>
      </div>
    </div>
  );
});

export default MainItem;
