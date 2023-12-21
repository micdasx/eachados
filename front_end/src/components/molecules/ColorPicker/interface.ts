export interface IColorPickerProps {
  options: { colorHEX: string; label: string; value: string }[];
  selectedOption: string;
  setSelectedOption: Function;
}
