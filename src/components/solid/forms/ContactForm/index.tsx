import { createResource } from "solid-js";
import type { Component, JSX } from "solid-js";

import { TextInput } from "../inputs/TextInput";
import { TextArea } from "../inputs/TextArea";
import { RadioInput } from "../inputs/RadioInput";
import { FormButton } from "../../buttons/FormButton";
import {
  contactMessage,
  updateContactMessageValue,
  contactMessageOptions,
  updateContactMessageOptions,
  contactFormReason,
  updateContactFormReason,
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
} from "../../../../stores/leadFormStore";
import type { ContactFormBody } from "../../../../types/forms";
import styles from "./ContactForm.module.css";

export const ContactForm: Component = () => {
  const handleFormSubmit = async () => {
    const reqBody: ContactFormBody = {
      timestamp: Date.now(),
      firstName: firstName().value,
      emailAddress: emailAddress().value,
      contactReason: contactFormReason().value,
      contactMessage: contactMessage().value,
    };
  };

  const isFormValid = () => {
    return (
      firstName().valid &&
      emailAddress().valid &&
      contactFormReason().value !== "" &&
      contactMessage().valid
    );
  };

  const formStyles = {
    "--input-field-container-box-shadow": "0 0px 0px 6px hsla(219,34%,19%,1)",
  } as JSX.CSSProperties;

  return (
    <form class={styles.contact_form}>
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
          isLoading={false}
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
          isLoading={false}
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
          isLoading={false}
        />
      </div>
      <FormButton theme="teal" disabled={!isFormValid}>
        Send Message Now
      </FormButton>
    </form>
  );
};
