import { children, createEffect } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import { handleSliderKeyboardEvent } from "../../../../../stores/forms";
import type { SliderInputName } from "../../../../../types/forms";
import styles from "./SliderOption.module.css";

interface SliderOptionProps {
  id: string;
  name: SliderInputName;
  value: number;
  isSelected: boolean;
  updateInputValue: (event: InputEvent) => void;
  children: JSXElement;
}

export const SliderOption: Component<SliderOptionProps> = (props) => {
  const child = children(() => props.children);

  return (
    <div class={styles.option_container}>
      <label
        for={props.id}
        class={styles.option_label_container}
        tabIndex="0"
        style={styles}
        onKeyDown={(e) => handleSliderKeyboardEvent(e, props.name, props.value)}
      >
        <span
          class={
            props.isSelected ? styles.option_label_active : styles.option_label
          }
        >
          {child()}
        </span>
      </label>
      <input
        type="radio"
        class={styles.option_input}
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.isSelected}
        onInput={props.updateInputValue}
      />
    </div>
  );
};
