import { children } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import styles from "./CheckboxOption.module.css";

interface CheckboxProps {
  name: string;
  isChecked: boolean;
  toggleIsToggleOn: () => void;
  toggleIsToggleOnWithKeyboard: (e: KeyboardEvent) => void;
  children: JSXElement;
}

export const CheckboxOption: Component<CheckboxProps> = (props) => {
  const child = children(() => props.children);

  return (
    <label
      for={props.name}
      class={styles.label_container}
      tabIndex="0"
      onKeyDown={props.toggleIsToggleOnWithKeyboard}
    >
      <input
        class={styles.checkbox_input}
        type="checkbox"
        id={props.name}
        name={props.name}
        checked={props.isChecked}
        onClick={props.toggleIsToggleOn}
      />
      <div
        class={props.isChecked ? styles.indicator_selected : styles.indicator}
      />
      {child()}
    </label>
  );
};
