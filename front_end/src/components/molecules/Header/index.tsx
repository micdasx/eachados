import React from "react";
import { Title, Text } from "../../atoms";
import { IHeaderProps } from "./interface";
import { IoMdArrowBack } from "react-icons/io";
import styles from "./style.module.scss";

const Header: React.FC<IHeaderProps> = ({ onGoBack, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div onClick={onGoBack} className={styles.containerLeft}>
        <IoMdArrowBack size={20}></IoMdArrowBack>
      </div>
      <div className={styles.containerRight}>
        <Title children={title} style={{ marginTop: 0 }}></Title>
        <Text children={subtitle}></Text>
      </div>
    </div>
  );
};

export default Header;
