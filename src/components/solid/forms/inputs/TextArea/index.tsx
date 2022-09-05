import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { CheckIcon } from "../../../../svgs/forms/CheckIcon";
import { ErrorIcon } from "../../../../svgs/forms/ErrorIcon";
import { ActiveIcon } from "../../../../svgs/forms/ActiveIcon";
import styles from "./TextArea.module.css";

interface TextAreaProps {
  name: string;
  labelName: string;
  labelFor: string;
  labelError: string;
  labelInstructions: string;
  placeholder: string;
  maxLength: number;
  rows: number;
  value: string | number;
  valid: boolean;
  initial: boolean;
  touched: boolean;
  onInput: (event: InputEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  isLoading: boolean;
}

export const TextArea: Component<TextAreaProps> = (props) => {
  createEffect(() => {
    console.log(props.value);
  });

  return (
    <div class={styles.input_field_container}>
      <div
        class={
          props.touched ? styles.field_container_active : styles.field_container
        }
      >
        <label
          html-for={props.labelFor}
          class={
            props.touched || (!props.touched && props.valid)
              ? styles.input_label_active
              : styles.input_label
          }
        >
          {props.labelName}
        </label>
        <div class={styles.input_container}>
          <textarea
            class={styles.the_input}
            id={props.name}
            typeof="text"
            name={props.name}
            value={props.value}
            maxLength={props.maxLength}
            rows={props.rows}
            placeholder={props.placeholder}
            onInput={props.onInput}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <div class={styles.input_status}>
            {props.valid && !props.touched ? (
              <CheckIcon
                isTextInput={true}
                isTrackingCheck={false}
                isActive={props.valid && !props.touched}
              />
            ) : null}
            {props.touched ? <ActiveIcon isActive={props.touched} /> : null}
            {!props.valid && !props.touched && !props.initial ? (
              <ErrorIcon isActive={!props.valid && !props.touched} />
            ) : null}
          </div>
        </div>
        <div
          class={
            props.touched
              ? styles.status_indicator_active
              : !props.touched && !props.valid && !props.initial
              ? styles.status_indicator_error
              : styles.status_indicator
          }
        />
      </div>
      <div class={styles.input_shadow} />
    </div>
  );
};
