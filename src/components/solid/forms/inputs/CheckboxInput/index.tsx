import { children } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import styles from "./CheckboxInput.module.css";

interface CheckboxInputProps {
  questionLabel: string;
  children: JSXElement;
}

export const CheckboxInput: Component<CheckboxInputProps> = (props) => {
  const child = children(() => props.children);

  return (
    <div class={styles.container}>
      <p class={styles.question_label}>{props.questionLabel}</p>
      <div class={styles.options_container}>{child()}</div>
    </div>
  );
};
