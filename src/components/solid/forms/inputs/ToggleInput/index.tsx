import { createEffect } from "solid-js";
import type { Component, JSX } from "solid-js";

import {
  toggleSwitchOn,
  toggleSwithOff,
} from "../../../../../animations/forms";
import { adaptToggleInputSize } from "../../../../../utils/utilityFunctions";
import {
  tealToggleTheme,
  purpleToggleTheme,
  pinkToggleTheme,
} from "../../../../../styles/formThemes";
import type { AccentColor } from "../../../../../types/styles";
import styles from "./ToggleInput.module.css";

interface ToggleSwitchProps {
  theme: AccentColor;
  name: string;
  title: string;
  leftLabel: string;
  rightLabel: string;
  toggleWidth: number;
  isToggleOn: boolean;
  toggleIsToggleOn: () => void;
  toggleIsToggleOnWithKeyboard: (event: KeyboardEvent) => void;
}

export const ToggleInput: Component<ToggleSwitchProps> = (props) => {
  let knobRef: HTMLSpanElement;

  createEffect(() => {
    const containerPadding = (2 / 75) * props.toggleWidth * 2;
    const xDistance = props.toggleWidth / 2 - containerPadding;

    if (props.isToggleOn) {
      toggleSwitchOn(knobRef, xDistance);
    }

    if (!props.isToggleOn) {
      toggleSwithOff(knobRef);
    }
  });

  const toggleSize = adaptToggleInputSize(props.toggleWidth);

  const activeTheme =
    props.theme === "teal"
      ? tealToggleTheme
      : props.theme === "purple"
      ? purpleToggleTheme
      : pinkToggleTheme;

  const flexibleStyles = {
    "--switch-width": `${props.toggleWidth}px`,
    "--container-border-radius": `${toggleSize.container.borderRadius}px`,
    "--container-padding": `${toggleSize.container.padding}px`,
    "--knob-border-radius": `${toggleSize.knob.borderRadius}px`,
    "--knob-aspect-ratio": `${toggleSize.knob.aspectRatio}`,
    ...activeTheme,
  } as JSX.CSSProperties;

  return (
    <div class={styles.toggle_container} style={flexibleStyles}>
      <input
        type="checkbox"
        class={styles.toggle_input}
        title={props.title}
        id={props.name}
        name={props.name}
        checked={props.isToggleOn}
        onClick={props.toggleIsToggleOn}
        onKeyDown={props.toggleIsToggleOnWithKeyboard}
      />
      <label for={props.name} class={styles.toggle_label}>
        <div class={styles.toggle_label_container}>
          <span
            class={
              props.isToggleOn
                ? styles.toggle_switch_label
                : styles.toggle_switch_label_active
            }
          >
            {props.leftLabel}
          </span>
          <span
            class={
              props.isToggleOn
                ? styles.toggle_switch_label_active
                : styles.toggle_switch_label
            }
          >
            {props.rightLabel}
          </span>
        </div>
        <span ref={knobRef!} class={styles.toggle_knob} />
      </label>
    </div>
  );
};
