import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import styles from "./RadioOption.module.css";
import type { UpdateValueFunction } from "../../../../../types/forms";

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  isChecked: boolean;
  updateInputValue: UpdateValueFunction;
}

export const RadioOption: Component<RadioOptionProps> = (props) => {
  createEffect(() => {
    console.log(props.isChecked);
  });

  return (
    <label html-for="" class={styles.label_container}>
      <div
        class={props.isChecked ? styles.indicator_selected : styles.indicator}
      />
      {props.label}
      <input
        class={styles.radio_input}
        type="radio"
        id={props.value}
        name={props.name}
        value={props.value}
        onInput={props.updateInputValue}
      />
    </label>
  );
};
