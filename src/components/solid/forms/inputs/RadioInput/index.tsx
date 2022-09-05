import { createMemo, createEffect } from "solid-js";
import type { Component } from "solid-js";

import { RadioOption as Option } from "./RadioOption";
import type {
  RadioOption,
  UpdateValueFunction,
} from "../../../../../types/forms";
import styles from "./RadioInput.module.css";

interface RadioInputProps {
  name: string;
  questionLabel: string;
  options: RadioOption[];
  updateInputValue: UpdateValueFunction;
}

export const RadioInput: Component<RadioInputProps> = (props) => {
  const options = createMemo(() =>
    props.options.map((option) => {
      return (
        <Option
          id={`${option.id}`}
          name={props.name}
          label={option.label}
          value={option.value}
          isChecked={option.isChecked}
          updateInputValue={props.updateInputValue}
        />
      );
    })
  );

  return (
    <div class={styles.container}>
      <p class={styles.question_label}>{props.questionLabel}</p>
      <div class={styles.options_container}>{options()}</div>
    </div>
  );
};
