import React from "react";
import Text from "../Text";
import { IColorOptionProps } from "./interface";

import styles from "./style.module.scss";

const ColorOption: React.FC<IColorOptionProps> = ({
  colorHEX,
  label,
  value,
  onPress,
  isSelected,
}) => {
  const handlePress = () => onPress(value);

  return (
    <div className={styles.container} onClick={handlePress}>
      <div
        className={isSelected ? styles.colorPressed : styles.color}
        style={{ backgroundColor: colorHEX }}
      />

      <Text children={label} />
    </div>
  );
};

export default ColorOption;
