import type { Component } from "solid-js";

import styles from "./TextInput.module.css";

interface TextInputProps {
  inputType: string;
  name: string;
  labelName: string;
  labelFor: string;
  labelError: string;
  labelInstructions: string;
  placeholder: string;
  value: string | number;
  valid: boolean;
  initial: boolean;
  touched: boolean;
  onInput: (event: InputEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  isLoading: boolean;
}

export const TextInput: Component<TextInputProps> = (props) => {
  return (
    <div class={styles.input_field_container}>
      <div class={styles.field_container}>
        <div class={styles.input_container}>
          <input />
          <div class={styles.input_status}></div>
        </div>
        <div class={styles.status_indicator} />
      </div>
      <div class={styles.input_shadow} />
    </div>
  );
};
