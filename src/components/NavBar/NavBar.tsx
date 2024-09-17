import styles from "./NavBar.module.css";
import { observer } from "mobx-react";
import { FieldTimeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import addGraficStore from "../../store/AddGraficStore";


const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <button className={styles.navButton}>
          <FieldTimeOutlined className={styles.NavigationImage} />
        </button>

        <button onClick={() => addGraficStore.openModal()} className={styles.navButton}>
          <PlusCircleOutlined className={styles.NavigationImage} />
        </button>
      </div>
    </nav>
  );
};

export default observer(NavBar);
