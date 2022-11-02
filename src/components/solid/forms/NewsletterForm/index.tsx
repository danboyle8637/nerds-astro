import {} from "solid-js";
import type { Component } from "solid-js";

import { BaseInput } from "../inputs/BaseTextInput";
import { ThreeDeeInput } from "../../../svgs/ThreeDeeInput";
import { ThreeDeeInputButton } from "../../../svgs/ThreeDeeInputButton";
import { CheckIcon } from "../../../svgs/forms/CheckIcon";
import {
  emailAddress,
  emailAddressOptions,
  updateEmailAddressValue,
  updateEmailAddressOptions,
} from "../../../../stores/leadFormStore";
import type { FourLinksFormBody } from "../../../../types/forms";
import styles from "./NewsletterForm.module.css";

export const NewsletterForm: Component = () => {
  let inputRef: HTMLInputElement;

  const handleFormSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const reqBody: FourLinksFormBody = {
      emailAddress: emailAddress().value,
    };

    const res = await fetch("http://127.0.0.1:8787/handle-four-links-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    if (res.status !== 200) {
      throw new Error("Show an error overlay");
    }

    // Redirect to a thank you page or somesort
  };

  return (
    <form class={styles.form_container} onSubmit={handleFormSubmit}>
      <div class={styles.input_container}>
        <div class={styles.fake_input}>
          <ThreeDeeInput
            initial={emailAddressOptions().initial}
            isTouched={emailAddressOptions().touched}
            isValid={emailAddress().valid}
          />
        </div>
        <div class={styles.real_input}>
          <BaseInput
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
      <button
        type="submit"
        aria-label="Submit newsletter form"
        class={styles.button_container}
      >
        <ThreeDeeInputButton isValid={emailAddress().valid} />
      </button>
    </form>
  );
};
