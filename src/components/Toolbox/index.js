import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { changeBrushSize, changeColor } from "@/slice/toolboxSlice";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";

const Toolbox = () => {
  const dispatch = useDispatch();

  const activeMenuItem = useSelector((state) => state?.menu?.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  const showStrokeToolOptions = activeMenuItem === MENU_ITEMS.PENCIL;

  const showBrushSizeOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  console.log("toolbox", activeMenuItem);

  // handle brush size & color

  const updateColor = (newColor) => {
    console.log(newColor);
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };
  const updateBrushSize = () => {};

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOptions && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stoke Color</h4>

          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.WHITE,
              })}
              style={{ backgroundColor: COLORS.WHITE }}
              onClick={() => updateColor(COLORS.WHITE)}
            />
          </div>
        </div>
      )}

      {showBrushSizeOption && (
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
      )}
    </div>
  );
};
export default Toolbox;
