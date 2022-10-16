import type { Component } from "solid-js";

import { BasePhoneInput } from "../inputs/PhoneInput/BasePhoneInput";
import { FormButton } from "../../buttons/FormButton";
import { ThreeDeeInput } from "../../../svgs/ThreeDeeInput";
import { ThreeDeeInputButton } from "../../../svgs/ThreeDeeInputButton";
import { CheckIcon } from "../../../svgs/forms/CheckIcon";
import {
  emailAddress,
  emailAddressOptions,
  updateEmailAddressValue,
  updateEmailAddressOptions,
} from "../../../../stores/leadFormStore";
import styles from "./NewsletterForm.module.css";

export const NewsletterForm: Component = () => {
  let inputRef: HTMLInputElement;

  return (
    <form class={styles.form_container}>
      <div class={styles.input_container}>
        <div class={styles.fake_input}>
          <ThreeDeeInput isTouched={emailAddressOptions().touched} />
        </div>
        <div class={styles.real_input}>
          <BasePhoneInput
            ref={inputRef!}
            name="emailAddress"
            dataName="lastFour"
            inputType="email"
            placeholder="Enter your email address..."
            value={emailAddress().value}
            onInput={updateEmailAddressValue}
            onFocus={updateEmailAddressOptions}
            onBlur={updateEmailAddressOptions}
          />
        </div>
        <div class={styles.check_icon}>
          <CheckIcon
            isActive={emailAddress().valid && !emailAddressOptions().touched}
            isTextInput={true}
            isTrackingCheck={false}
          />
        </div>
      </div>
      <div class={styles.button_container}>
        <ThreeDeeInputButton />
      </div>
    </form>
  );
};
