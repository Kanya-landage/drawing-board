import {
  faDownload,
  faEraser,
  faPencil,
  faRedo,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { MENU_ITEMS } from "@/constants";
import { useDispatch } from "react-redux";
import { actionItemClick, menuItemClick } from "@/slice/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();

  //handleChanges for menu icon click
  const handleMenuClick = (activeMenuItem) => {
    dispatch(menuItemClick(activeMenuItem));
  };

  const handleActionItemClick = (actionMenuItem) => {
    dispatch(actionItemClick(actionMenuItem));
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>

      <div
        className={styles.iconWrapper}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>

      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faUndo} className={styles.icon} />
      </div>

      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRedo} className={styles.icon} />
      </div>

      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faDownload} className={styles.icon} />
      </div>
    </div>
  );
};
export default Menu;
