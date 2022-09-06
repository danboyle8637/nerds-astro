import { createMemo, createEffect, For } from "solid-js";
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
  value: string;
  options: RadioOption[];
  updateInputValue: UpdateValueFunction;
}

export const RadioInput: Component<RadioInputProps> = (props) => {
  const radioOptions = createMemo(() =>
    props.options.map((option) => {
      if (option.isChecked) {
        console.log(`Option id of: ${option.id} is checked.`);
      }

      return (
        <Option
          id={`priority-${option.id}`}
          name={props.name}
          value={option.value}
          isChecked={option.isChecked}
          updateInputValue={props.updateInputValue}
        >
          {option.label}
        </Option>
      );
    })
  );

  // createEffect(() => {
  //   console.log(props.options);
  // });

  return (
    <div class={styles.container}>
      <p class={styles.question_label}>{props.questionLabel}</p>
      <div class={styles.options_container}>{radioOptions()}</div>
    </div>
  );
};

/*
<For each={props.options}>
  {(option) => {
    const { id, value, label, isChecked } = option;

    return (
      <Option
        id={`priority-${id}`}
        name={props.name}
        value={value}
        isChecked={isChecked}
        updateInputValue={props.updateInputValue}
      >
        {label}
      </Option>
    );
  }}
</For>
*/
