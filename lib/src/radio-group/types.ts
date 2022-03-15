export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  label?: string;
  name?: string;
  helperText?: string;
  options: Option[];
  disabled?: boolean;
  optional?: boolean;
  optionalItemLabel?: string;
  readonly?: boolean;
  stacking?: "row" | "column";
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
};

export type RefType = HTMLDivElement;

export type RadioProps = {
  option: Option;
  currentValue?: string;
  onClick: () => void;
  onFocus: () => void;
  error?: string;
  disabled: boolean;
  focused: boolean;
};

export default RadioGroupProps;
