export interface InputValue {
  value: string;
  valid: boolean;
}

export type InputOptions = {
  initial: boolean;
  touched: boolean;
};

export interface RadioOption {
  id: number;
  value: string;
  label: string;
  isChecked: boolean;
}

export interface RadioInput {
  value: string;
  options: RadioOption[];
}

export interface LeadFormOption {
  id: number;
  value: string;
  label: string;
  isChecked: boolean;
}

export type UpdateValueFunction = (event: InputEvent) => void;

export type UpdateOptionsFunction = (event: FocusEvent) => void;
