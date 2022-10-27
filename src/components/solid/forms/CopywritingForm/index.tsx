import { createMemo } from "solid-js";
import type { Component } from "solid-js";

import { TextInput } from "../inputs/TextInput";
import { RadioInput } from "../inputs/RadioInput";
import { PhoneInput } from "../inputs/PhoneInput";
import { FormButton } from "../../../solid/buttons/FormButton";
import {
  firstName,
  firstNameOptions,
  updateFirstNameValue,
  updateFirstNameOptions,
  emailAddress,
  emailAddressOptions,
  sevenDaySiteUseCase,
  updateEmailAddressValue,
  updateEmailAddressOptions,
  copyTimeline,
  updateCopyTimeline,
} from "../../../../stores/leadFormStore";
import styles from "./CopywritingForm.module.css";

export const CopywritingForm: Component = () => {
  const handleFormSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log("Save data and then kick to schedule view");
  };

  const formValid = createMemo(() => {
    return (
      firstName().valid &&
      emailAddress().valid &&
      sevenDaySiteUseCase().value !== ""
    );
  });

  return (
    <form class={styles.lead_form} onSubmit={handleFormSubmit}>
      <TextInput
        inputType="text"
        name="firstName"
        labelFor="firstName"
        labelName="First Name"
        labelInstructions="Enter your first name"
        labelError="Can't be blank"
        placeholder="Enter your first name"
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
        inputType="email"
        name="emailAddress"
        labelFor="emailAddress"
        labelName="Email Address"
        labelInstructions="Enter your email"
        labelError="Must be valid email"
        placeholder="Enter your email address"
        value={emailAddress().value}
        valid={emailAddress().valid}
        initial={emailAddressOptions().initial}
        touched={emailAddressOptions().touched}
        onInput={updateEmailAddressValue}
        onFocus={updateEmailAddressOptions}
        onBlur={updateEmailAddressOptions}
        isLoading={false}
      />
      <PhoneInput isLoading={false} optional={true} />
      <RadioInput
        name="copywritingTimeline"
        questionLabel="What's your timeline for this copy?"
        value={copyTimeline().value}
        options={copyTimeline().options}
        updateInputValue={updateCopyTimeline}
      />
      <FormButton theme="teal" disabled={!formValid()}>
        Step 2 - Schecule Time
      </FormButton>
    </form>
  );
};
