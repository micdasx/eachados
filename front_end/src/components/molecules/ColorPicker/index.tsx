import React from "react";
import { ColorOption, Title } from "../../atoms";
import { IColorPickerProps } from "./interface";
import styles from "./styles.module.scss";

const ColorPicker: React.FC<IColorPickerProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const renderOptions = () => {
    return options.map((option) => {
      return (
        <ColorOption
          {...option}
          onPress={setSelectedOption}
          isSelected={selectedOption === option.value}
        />
      );
    });
  };

  return (
    <div>
      <Title children="Qual a cor do objeto?" />
      <div className={styles.optionsContainer}>{renderOptions()}</div>;
    </div>
  );
};

export default ColorPicker;
