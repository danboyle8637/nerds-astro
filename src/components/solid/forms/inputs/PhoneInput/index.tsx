import { createSignal, createMemo, createEffect } from "solid-js";
import type { Component } from "solid-js";

import { BasePhoneInput } from "./BasePhoneInput";
import { CheckIcon } from "../../../../svgs/forms/CheckIcon";
import { ErrorIcon } from "../../../../svgs/forms/ErrorIcon";
import { ActiveIcon } from "../../../../svgs/forms/ActiveIcon";
import { OptionalTag } from "../../formComponents/OptionalTag";
import {
  areaCode,
  areaCodeOptions,
  updateAreaCode,
  updateAreaCodeOptions,
  firstThree,
  firstThreeOptions,
  updateFirstThree,
  updateFirstThreeOptions,
  lastFour,
  lastFourOptions,
  updateLastFour,
  updateLastFourOptions,
} from "../../../../../stores/leadFormStore";
import styles from "./PhoneInput.module.css";

interface PhoneInputProps {
  isLoading: boolean;
  optional?: boolean;
}

export const PhoneInput: Component<PhoneInputProps> = (props) => {
  let areaCodeRef: HTMLInputElement;
  let firstThreeRef: HTMLInputElement;
  let lastFourRef: HTMLInputElement;

  const [showOptionalTag, setShowOptionalTag] = createSignal<boolean>(false);

  const touched = createMemo(
    () =>
      areaCodeOptions().touched ||
      firstThreeOptions().touched ||
      lastFourOptions().touched
  );

  const valid = createMemo(
    () => areaCode().valid && firstThree().valid && lastFour().valid
  );

  const blankValue = createMemo(
    () =>
      areaCode().value === "" ||
      firstThree().value === "" ||
      lastFour().value === ""
  );

  const initial = createMemo(
    () =>
      areaCodeOptions().initial &&
      firstThreeOptions().initial &&
      lastFourOptions().initial
  );

  createMemo(() => {
    if (props.optional && blankValue() && !touched()) {
      setShowOptionalTag(true);
    } else {
      setShowOptionalTag(false);
    }
  });

  createEffect(() => {
    if (lastFour().value === "" && !firstThree().valid && touched()) {
      firstThreeRef.focus();
    }

    if (firstThree().value === "" && !areaCode().valid && touched()) {
      areaCodeRef.focus();
    }

    if (firstThree().valid && firstThreeOptions().touched) {
      lastFourRef.focus();
    }

    if (areaCode().valid && areaCodeOptions().touched) {
      firstThreeRef.focus();
    }
  });

  return (
    <div class={styles.input_field_container}>
      <div
        class={
          touched() ? styles.field_container_active : styles.field_container
        }
      >
        <label
          for="phoneNumber"
          class={
            touched() ||
            (!touched() && valid() && !blankValue()) ||
            (!valid() && !initial() && !blankValue())
              ? styles.input_label_active
              : styles.input_label
          }
        >
          Phone Number
        </label>
        <OptionalTag showTag={showOptionalTag()} />
        <div class={styles.input_container}>
          <span class={styles.area_code_container}>
            <p
              class={
                touched() || valid()
                  ? styles.phone_number_extras
                  : styles.phone_number_extras_hidden
              }
            >
              (
            </p>
            <BasePhoneInput
              ref={areaCodeRef!}
              inputType="number"
              name="phoneNumber"
              dataName="areaCode"
              value={areaCode().value}
              placeholder="###"
              onInput={updateAreaCode}
              onFocus={updateAreaCodeOptions}
              onBlur={updateAreaCodeOptions}
            />
            <p
              class={
                touched() || valid()
                  ? styles.phone_number_extras
                  : styles.phone_number_extras_hidden
              }
            >
              )
            </p>
          </span>
          <BasePhoneInput
            ref={firstThreeRef!}
            inputType="number"
            name="phoneNumber"
            dataName="firstThree"
            value={firstThree().value}
            placeholder="###"
            onInput={updateFirstThree}
            onFocus={updateFirstThreeOptions}
            onBlur={updateFirstThreeOptions}
          />
          <p
            class={
              touched() || valid()
                ? styles.phone_number_extras
                : styles.phone_number_extras_hidden
            }
          >
            -
          </p>
          <BasePhoneInput
            ref={lastFourRef!}
            inputType="number"
            name="phoneNumber"
            dataName="lastFour"
            value={lastFour().value}
            placeholder="####"
            onInput={updateLastFour}
            onFocus={updateLastFourOptions}
            onBlur={updateLastFourOptions}
          />
          <div class={styles.input_status}>
            {valid() && !touched() && !blankValue() ? (
              <CheckIcon
                isTextInput={true}
                isTrackingCheck={false}
                isActive={valid() && !touched()}
              />
            ) : null}
            {touched() ? <ActiveIcon isActive={touched()} /> : null}
            {!valid() && !touched() && !initial() && !props.optional ? (
              <ErrorIcon isActive={!valid && !touched} />
            ) : null}
          </div>
        </div>
        <div
          class={
            touched()
              ? styles.status_indicator_active
              : (!touched() && !valid() && !initial() && !props.optional) ||
                (props.optional && !initial() && !valid() && !blankValue())
              ? styles.status_indicator_error
              : styles.status_indicator
          }
        />
      </div>
      <div class={styles.input_shadow} />
    </div>
  );
};
