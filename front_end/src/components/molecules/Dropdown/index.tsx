import React from "react";
import { Title } from "../../atoms";
import { IDropdownProps } from "./interface";

import styles from "./styles.module.scss";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  placeholder,
  title,
}) => {
  const renderAllOptions = () => {
    return options.map((option) => {
      return <option value={option.value}>{option.label}</option>;
    });
  };

  return (
    <div>
      <Title children={title} />

      <select
        name="cars"
        className={styles.dropdown}
        placeholder={placeholder}
        defaultValue="null"
      >
        {renderAllOptions()}
      </select>
    </div>
  );
};

export default Dropdown;
