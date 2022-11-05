import { createEffect, createSignal } from "solid-js";
import type { Component } from "solid-js";

import { BaseInput } from "../inputs/BaseTextInput";
import { ThreeDeeInput } from "../../../svgs/ThreeDeeInput";
import { ThreeDeeInputButton } from "../../../svgs/ThreeDeeInputButton";
import { CheckIcon } from "../../../svgs/forms/CheckIcon";
import { ShortMessageOverlay } from "../../overlays/ShortMessageOverlay";
import {
  emailAddress,
  emailAddressOptions,
  updateEmailAddressValue,
  updateEmailAddressOptions,
  toggleIsFetchCallActive,
  resetNewsletterForm,
} from "../../../../stores/leadFormStore";
import type { FourLinksFormBody } from "../../../../types/forms";
import styles from "./NewsletterForm.module.css";

export const NewsletterForm: Component = () => {
  let inputRef: HTMLInputElement;

  const [isFetchError, setIsFetchError] = createSignal<boolean>(false);
  const [isFetchSuccess, setIsFetchSuccess] = createSignal<boolean>(false);

  const updateIsFetchError = (status: boolean) => {
    setIsFetchError(status);
  };

  const updateIsFetchSuccess = (status: boolean) => {
    setIsFetchSuccess(status);
  };

  const handleFormSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    toggleIsFetchCallActive();

    const reqBody: FourLinksFormBody = {
      emailAddress: emailAddress().value,
    };

    const url = import.meta.env.DEV
      ? `${import.meta.env.PUBLIC_DEV_ENDPOINT}/handle-four-links-form`
      : `${import.meta.env.PUBLIC_API_ENDPOINT}/handle-four-links-form`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.PUBLIC_AUTH_TOKEN}`,
      },
      body: JSON.stringify(reqBody),
    });

    if (res.status !== 200) {
      updateIsFetchError(true);
      resetNewsletterForm();
      return;
    }

    toggleIsFetchCallActive();
    resetNewsletterForm();
    updateIsFetchSuccess(true);
  };

  return (
    <>
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
      <ShortMessageOverlay
        type="error"
        isOpen={isFetchError()}
        handleActiveClick={updateIsFetchError}
      />
      <ShortMessageOverlay
        type="success"
        isOpen={isFetchSuccess()}
        handleActiveClick={updateIsFetchSuccess}
      />
    </>
  );
};
