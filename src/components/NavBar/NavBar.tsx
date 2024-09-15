import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FieldTimeOutlined, PlusCircleOutlined } from "@ant-design/icons";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <Link to={"/addGrafic"} className={styles.navButton}>
          <PlusCircleOutlined className={styles.NavigationImage} />
        </Link>

        <Link to={"/addGrafic"} className={styles.navButton}>
          <FieldTimeOutlined className={styles.NavigationImage} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
