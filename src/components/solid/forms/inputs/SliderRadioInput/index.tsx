import { createMemo } from "solid-js";
import type { Component } from "solid-js";

import { SliderOption } from "./SliderOption";
import { sliderRadioInputAni } from "../../../../../animations/forms";
import type {
  SliderInputOption,
  SliderInputName,
} from "../../../../../types/forms";
import styles from "./SliderRadioInput.module.css";

interface SliderRadioInputProps {
  inputWidth: number;
  label: string;
  name: SliderInputName;
  startingValue: number;
  value: number;
  options: SliderInputOption[];
  updateInputValue: (event: InputEvent) => void;
}

export const SliderRadioInput: Component<SliderRadioInputProps> = (props) => {
  let sliderKnob: HTMLDivElement;
  const CONTAINER_WIDTH = props.inputWidth;
  const OPTIONS_CONTAINER_WIDTH = CONTAINER_WIDTH - 12;

  const numOfOptions = props.options.length;
  const knobWidth = OPTIONS_CONTAINER_WIDTH / numOfOptions;
  const initialKnobX =
    OPTIONS_CONTAINER_WIDTH -
    (OPTIONS_CONTAINER_WIDTH - knobWidth * (props.startingValue - 1));

  createMemo(() => {
    const translateX =
      OPTIONS_CONTAINER_WIDTH -
      (OPTIONS_CONTAINER_WIDTH - knobWidth * (props.value - 1));

    console.log(translateX);
    setTimeout(() => sliderRadioInputAni(sliderKnob, translateX));
  });

  const inputOptions = createMemo(() =>
    props.options.map((option) => (
      <SliderOption
        id={`${option.label}-${option.name}`}
        name={props.name}
        value={option.value}
        isSelected={option.isSelected}
        updateInputValue={props.updateInputValue}
      >
        {option.label}
      </SliderOption>
    ))
  );

  const sliderStyles = {
    "--container-width": `${props.inputWidth}px`,
    "--options-container-cols": `repeat(${props.options.length}, 1fr)`,
    "--indicator-width": `${knobWidth}px`,
    "--knob-start-x": `${initialKnobX}px`,
  };

  return (
    <div class={styles.slider_input_container}>
      <p class={styles.slider_input_label}>
        {props.label}:{" "}
        <span class={styles.slider_input_label_value}>{props.value}</span>
      </p>
      <div class={styles.slider_option_container}>
        {inputOptions()}
        <div ref={sliderKnob!} class={styles.slider_knob} />
      </div>
    </div>
  );
};
