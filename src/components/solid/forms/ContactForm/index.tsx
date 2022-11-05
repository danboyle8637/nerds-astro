import { createMemo, createSignal } from "solid-js";
import type { Component, JSX } from "solid-js";

import { TextInput } from "../inputs/TextInput";
import { TextArea } from "../inputs/TextArea";
import { RadioInput } from "../inputs/RadioInput";
import { FormButton } from "../../buttons/FormButton";
import { ShortMessageOverlay } from "../../overlays/ShortMessageOverlay";
import {
  contactMessage,
  updateContactMessageValue,
  contactMessageOptions,
  updateContactMessageOptions,
  contactFormReason,
  updateContactFormReason,
  resetContactForm1,
} from "../../../../stores/forms";
import {
  firstName,
  firstNameOptions,
  updateFirstNameValue,
  updateFirstNameOptions,
  emailAddress,
  emailAddressOptions,
  updateEmailAddressValue,
  updateEmailAddressOptions,
  toggleIsFetchCallActive,
  isFetchCallActive,
  resetContactForm2,
} from "../../../../stores/leadFormStore";
import type { ContactFormBody } from "../../../../types/forms";
import styles from "./ContactForm.module.css";

export const ContactForm: Component = () => {
  const [isFetchError, setIsFetchError] = createSignal<boolean>(false);

  const updateIsFetchError = (status: boolean) => {
    setIsFetchError(status);
  };

  const handleFormSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    toggleIsFetchCallActive();

    const reqBody: ContactFormBody = {
      timestamp: Date.now(),
      firstName: firstName().value,
      emailAddress: emailAddress().value,
      contactReason: contactFormReason().value,
      contactMessage: contactMessage().value,
    };

    const url = import.meta.env.DEV
      ? `${import.meta.env.PUBLIC_DEV_ENDPOINT}/handle-contact-form`
      : `${import.meta.env.PUBLIC_ENDPOINT}/handle-contact-form`;

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
      resetContactForm1();
      resetContactForm2();
      return;
    }

    toggleIsFetchCallActive();

    if (window) {
      const url = import.meta.env.DEV
        ? "http://localhost:3000/thank-you/contact"
        : "https://nerdswhosell.com/thank-you/contact";

      window.location.replace(url);
    }
  };

  const isFormValid = createMemo(
    () =>
      firstName().valid &&
      emailAddress().valid &&
      contactFormReason().value !== "" &&
      contactMessage().valid
  );

  const formStyles = {
    "--input-field-container-box-shadow": "0 0px 0px 6px hsla(219,34%,19%,1)",
  } as JSX.CSSProperties;

  return (
    <>
      <form class={styles.contact_form} onSubmit={handleFormSubmit}>
        <div class={styles.input_container} style={formStyles}>
          <TextInput
            inputType="text"
            name="firstName"
            labelFor="firstName"
            labelName="First Name"
            labelInstructions="Enter your first name"
            labelError="Can't be blank"
            placeholder="Enter your first name..."
            value={firstName().value}
            valid={firstName().valid}
            initial={firstNameOptions().initial}
            touched={firstNameOptions().touched}
            onInput={updateFirstNameValue}
            onFocus={updateFirstNameOptions}
            onBlur={updateFirstNameOptions}
            isLoading={isFetchCallActive()}
          />
          <TextInput
            inputType="text"
            name="emailAddress"
            labelFor="emailAddress"
            labelName="Email Address"
            labelInstructions="Enter your email address"
            labelError="Enter valid email"
            placeholder="Enter your email address..."
            value={emailAddress().value}
            valid={emailAddress().valid}
            initial={emailAddressOptions().initial}
            touched={emailAddressOptions().touched}
            onInput={updateEmailAddressValue}
            onFocus={updateEmailAddressOptions}
            onBlur={updateEmailAddressOptions}
            isLoading={isFetchCallActive()}
          />
          <RadioInput
            name="contactReason"
            questionLabel="How can a Nerd help you?"
            value={contactFormReason().value}
            options={contactFormReason().options}
            updateInputValue={updateContactFormReason}
          />
          <TextArea
            name="contactMessage"
            labelFor="contactMessage"
            labelName="Tell your Nerd more..."
            labelInstructions="Be description"
            labelError="Can't be blank"
            placeholder="Give some more detail so we can help..."
            maxLength={500}
            rows={6}
            value={contactMessage().value}
            valid={contactMessage().valid}
            initial={contactMessageOptions().initial}
            touched={contactMessageOptions().touched}
            onInput={updateContactMessageValue}
            onFocus={updateContactMessageOptions}
            onBlur={updateContactMessageOptions}
            isLoading={isFetchCallActive()}
          />
        </div>
        <FormButton theme="teal" disabled={!isFormValid()}>
          Send Message Now
        </FormButton>
      </form>
      <ShortMessageOverlay
        type="error"
        isOpen={isFetchError()}
        handleActiveClick={updateIsFetchError}
      />
    </>
  );
};
