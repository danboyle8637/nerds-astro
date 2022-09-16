import { children } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  id: string;
  name: string;
  isChecked: boolean;
  toggleIsToggleOn: () => void;
  toggleIsToggleOnWithKeyboard: (e: KeyboardEvent) => void;
  children: JSXElement;
}

export const CheckboxInput: Component<CheckboxProps> = (props) => {
  const child = children(() => props.children);

  return (
    <label for={props.name} class={styles.label_container}>
      <input
        class={styles.checkbox_input}
        type="checkbox"
        id={props.name}
        name={props.name}
        checked={props.isChecked}
        onClick={props.toggleIsToggleOn}
        onKeyDown={props.toggleIsToggleOnWithKeyboard}
      />
      <div
        class={props.isChecked ? styles.indicator_selected : styles.indicator}
      />
      {child()}
    </label>
  );
};
