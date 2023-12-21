import React from "react";
import { Title, Text } from "../../atoms";
import { IInputProps } from "./interface";

import styles from "./styles.module.scss";

const Input: React.FC<IInputProps> = ({ placeholder, title, description }) => {
  return (
    <div>
      <Title children={title} />

      <Text children={description} />

      <textarea className={styles.input} placeholder={placeholder} rows={8} />
    </div>
  );
};

export default Input;
