import React from "react";
import { ITextProps } from "./interface";
import styles from "./style.module.scss";

const Text: React.FC<ITextProps> = ({ ...rest }) => {
  return <p {...rest} className={styles.title} />;
};

export default Text;
