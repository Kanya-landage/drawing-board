import {
  faDownload,
  faEraser,
  faPencil,
  faRedo,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>

      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>

      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faUndo} className={styles.icon} />
      </div>

      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRedo} className={styles.icon} />
      </div>

      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faDownload} className={styles.icon} />
      </div>
    </div>
  );
};
export default Menu;
