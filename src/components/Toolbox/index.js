import styles from "./index.module.css";
import { COLORS } from "@/constants";
import cx from "classnames";
const Toolbox = () => {
  const updateBrushSize = () => {};
  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stoke Color</h4>

        <div className={styles.itemContainer}>
          <div
            className={cx(styles.colorBox, {
              [styles.active]: color === COLORS.BLACK,
            })}
            style={{ backgroundColor: COLORS.BLACK }}
          />
          <div
            className={cx(styles.colorBox, {
              [styles.active]: color === COLORS.BLACK,
            })}
            style={{ backgroundColor: COLORS.RED }}
          />
          <div
            className={cx(styles.colorBox, {
              [styles.active]: color === COLORS.BLACK,
            })}
            style={{ backgroundColor: COLORS.GREEN }}
          />
          <div
            className={cx(styles.colorBox, {
              [styles.active]: color === COLORS.BLACK,
            })}
            style={{ backgroundColor: COLORS.BLUE }}
          />
          <div
            className={cx(styles.colorBox, {
              [styles.active]: color === COLORS.BLACK,
            })}
            style={{ backgroundColor: COLORS.ORANGE }}
          />
          <div
            className={cx(styles.colorBox, {
              [styles.active]: color === COLORS.BLACK,
            })}
            style={{ backgroundColor: COLORS.YELLOW }}
          />
          <div
            className={cx(styles.colorBox, {
              [styles.active]: color === COLORS.BLACK,
            })}
            style={{ backgroundColor: COLORS.WHITE }}
          />
        </div>
      </div>

      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size</h4>
        <div className={styles.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};
export default Toolbox;
