import React from "react";
import { COLORS } from "../../../constants/colors/colors";
import Text from "../Text";
import { ITagProps } from "./interface";

import styles from "./styles.module.scss";

const Tag: React.FC<ITagProps> = ({
  image,
  title,
  backgroundColor = COLORS.blue,
  color = COLORS.white,
}) => {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      {!!image ? <img src={image} className={styles.image} /> : null}

      <Text children={title} style={{ margin: 0, color }} />
    </div>
  );
};

export default Tag;
