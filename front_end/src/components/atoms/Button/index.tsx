import React from "react";
import { IButtonProps } from "./interface";

import styles from "./styles.module.scss";

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  isLoading = false,
}) => {
  return (
    <div className={styles.container} {...{ onClick }}>
      {isLoading ? (
        <img
          src={"https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"}
          className={styles.loading}
        />
      ) : (
        <p className={styles.label} {...{ children }} />
      )}
    </div>
  );
};

export default Button;
