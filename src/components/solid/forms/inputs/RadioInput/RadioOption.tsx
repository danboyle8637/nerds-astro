import { createEffect } from "solid-js";
import { children } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import styles from "./RadioOption.module.css";
import type { UpdateValueFunction } from "../../../../../types/forms";

interface RadioOptionProps {
  id: string;
  name: string;
  value: string;
  isChecked: boolean;
  updateInputValue: UpdateValueFunction;
  children: JSXElement;
}

export const RadioOption: Component<RadioOptionProps> = (props) => {
  const child = children(() => props.children);

  return (
    <label for={props.value} class={styles.label_container}>
      <input
        class={styles.radio_input}
        type="radio"
        id={props.value}
        name={props.name}
        value={props.value}
        checked={props.isChecked}
        onInput={props.updateInputValue}
      />
      <div
        class={props.isChecked ? styles.indicator_selected : styles.indicator}
      />
      {child()}
    </label>
  );
};
