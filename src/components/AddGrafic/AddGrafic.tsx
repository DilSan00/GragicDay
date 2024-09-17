import React, { useState } from "react";
import styles from "./AddGrafic.module.css";
import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import CounterUI from "../../shared/CounterUI/CounterUI";

import { observer } from "mobx-react-lite";
import timerStore from "../../store/TimerStore";
import contentStore from "../../store/ContentStore";
import addGraficStore from "../../store/AddGraficStore";

const AddGrafic: React.FC = observer(() => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ffffff");

  const handleAdd = () => {
    const id = Date.now();
    const time = {
      hour: timerStore.countHour1 * 10 + timerStore.countHour2,
      minute: timerStore.countMinute1 * 10 + timerStore.countMinute2,
    };
    contentStore.addGrafic({ id, time, title, color });
    setTitle("");
    setColor("#ffffff");
    addGraficStore.closeModal();
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className={`${styles.addGrafic}`}>
      <button
        onClick={() => addGraficStore.closeModal()}
        className={styles.addGraficClose}
        style={{ position: "absolute" }}
      >
        <CloseOutlined
          className={styles.addGraficCloseIMG}
          style={{ fontSize: "30px" }}
        />
      </button>
      <form className={styles.form}>
        <label className={styles.addGraficTitle}>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.inputGrafic}
        />
      </form>

      <div className={styles.addGraficTime}>
        <div className={styles.addGraficFlex}>
          <h3 className={styles.addGraficTitle}>Time: </h3>

          <div className={styles.addGraficFlex}>
            <CounterUI
              onClick1={() => timerStore.incrementHour()}
              onClick2={() => timerStore.decrementHour()}
              count1={timerStore.countHour1}
              count2={timerStore.countHour2}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>:</h3>
            <CounterUI
              onClick1={() => timerStore.incrementMinute()}
              onClick2={() => timerStore.decrementMinute()}
              count1={timerStore.countMinute1}
              count2={timerStore.countMinute2}
            />
          </div>
        </div>

        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className={styles.addGraficColor}
        />

        <button onClick={handleAdd}>
          <PlusCircleOutlined className={styles.addGraficBtn} />
        </button>
      </div>
    </div>
  );
});

export default AddGrafic;
