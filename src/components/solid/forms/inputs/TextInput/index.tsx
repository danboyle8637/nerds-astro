import { createSignal, createMemo } from "solid-js";
import type { Component } from "solid-js";

import { CheckIcon } from "../../../../svgs/forms/CheckIcon";
import { ErrorIcon } from "../../../../svgs/forms/ErrorIcon";
import { ActiveIcon } from "../../../../svgs/forms/ActiveIcon";
import { OptionalTag } from "../../formComponents/OptionalTag";
import styles from "./TextInput.module.css";

interface TextInputProps {
  inputType: string;
  name: string;
  labelName: string;
  labelFor: string;
  labelError: string;
  labelInstructions: string;
  placeholder: string;
  value: string | number;
  valid: boolean;
  initial: boolean;
  touched: boolean;
  onInput: (event: InputEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  isLoading: boolean;
  optional?: boolean;
}

export const TextInput: Component<TextInputProps> = (props) => {
  const [showOptionalTag, setShowOptionalTag] = createSignal<boolean>(false);

  createMemo(() => {
    if (props.optional && props.value === "") {
      setShowOptionalTag(true);
    } else {
      setShowOptionalTag(false);
    }
  });

  return (
    <div class={styles.input_field_container}>
      <div
        class={
          props.touched ? styles.field_container_active : styles.field_container
        }
      >
        <label
          for={props.labelFor}
          class={
            props.touched ||
            (!props.touched && props.valid && props.value !== "") ||
            (!props.valid && !props.initial && props.value !== "")
              ? styles.input_label_active
              : styles.input_label
          }
        >
          {props.labelName}
        </label>
        <OptionalTag showTag={showOptionalTag()} />
        <div class={styles.input_container}>
          <input
            class={styles.the_input}
            id={props.name}
            type={props.inputType}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onInput={props.onInput}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <div class={styles.input_status}>
            {props.valid && !props.touched && props.value !== "" ? (
              <CheckIcon
                isTextInput={true}
                isTrackingCheck={false}
                isActive={props.valid && !props.touched}
              />
            ) : null}
            {props.touched ? <ActiveIcon isActive={props.touched} /> : null}
            {!props.valid &&
            !props.touched &&
            !props.initial &&
            !props.optional ? (
              <ErrorIcon isActive={!props.valid && !props.touched} />
            ) : null}
          </div>
        </div>
        <div
          class={
            props.touched
              ? styles.status_indicator_active
              : (!props.touched &&
                  !props.valid &&
                  !props.initial &&
                  !props.optional) ||
                (props.optional &&
                  !props.initial &&
                  !props.valid &&
                  props.value !== "")
              ? styles.status_indicator_error
              : styles.status_indicator
          }
        />
      </div>
      <div class={styles.input_shadow} />
    </div>
  );
};
