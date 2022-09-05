import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import styles from "./RadioOption.module.css";
import type { UpdateValueFunction } from "../../../../../types/forms";

interface RadioOptionProps {
  id: string;
  name: string;
  value: string;
  label: string;
  isChecked: boolean;
  updateInputValue: UpdateValueFunction;
}

export const RadioOption: Component<RadioOptionProps> = (props) => {
  return (
    <label html-for={props.id} class={styles.label_container}>
      <div
        class={props.isChecked ? styles.indicator_selected : styles.indicator}
      />
      {props.label}
      <input
        class={styles.radio_input}
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onInput={props.updateInputValue}
      />
    </label>
  );
};
