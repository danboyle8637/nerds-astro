import type { Component } from "solid-js";

import styles from "./BasePhoneInput.module.css";
import type {
  UpdateValueFunction,
  UpdateOptionsFunction,
} from "../../../../../types/forms";

interface BaseTextInputProps {
  ref: HTMLInputElement;
  name: string;
  dataName: string;
  inputType: string;
  value: string;
  placeholder: string;
  onInput: UpdateValueFunction;
  onFocus: UpdateOptionsFunction;
  onBlur: UpdateOptionsFunction;
}

export const BasePhoneInput: Component<BaseTextInputProps> = (props) => {
  return (
    <input
      ref={props.ref}
      class={
        props.dataName === "lastFour"
          ? styles.the_input_pull_left
          : styles.the_input
      }
      id={props.name}
      type={props.inputType}
      name={props.name}
      data-name={props.dataName}
      value={props.value}
      placeholder={props.placeholder}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};
