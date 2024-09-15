import React, { FC } from "react";
import styles from "./CounterUI.module.css";
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons'


interface CounterUIProps {
  onClick1: () => void,
  onClick2: () => void,
  count1: number,
  count2: number,
}

const CounterUI: FC<CounterUIProps> = ({ onClick1, onClick2, count1, count2}) => {


  return (
    <div className={styles.counterUI}>
      <button onClick={onClick1} className={styles.counterBtn}>
        <CaretUpOutlined className={styles.counterBtnIMG}/>
      </button>
      <h2>
        {count1}
        {count2}
      </h2>
      <button onClick={onClick2} className={styles.counterBtn}>
        <CaretDownOutlined className={styles.counterBtnIMG}/>
      </button>
    </div>
  );
};

export default CounterUI;
