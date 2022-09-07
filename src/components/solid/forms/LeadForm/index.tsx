import { createEffect, createMemo } from "solid-js";
import type { Component } from "solid-js";

import { TextInput } from "../inputs/TextInput";
import { TextArea } from "../inputs/TextArea";
import { RadioInput } from "../inputs/RadioInput";
import { FormButton } from "../../../solid/buttons/FormButton";
import {
  firstName,
  firstNameOptions,
  updateFirstNameValue,
  updateFirstNameOptions,
  emailAddress,
  emailAddressOptions,
  biggestPriority,
  updateBiggestPriority,
  updateEmailAddressValue,
  updateEmailAddressOptions,
  phoneNumber,
  phoneNumberOptions,
  updatePhoneNumberValue,
  updatePhoneNumberOptions,
  currentSite,
  currentSiteOptions,
  updateCurrentSiteValue,
  updateCurrentSiteOptions,
  whyNow,
  whyNowOptions,
  updateWhyNowValue,
  updateWhyNowptions,
} from "../../../../stores/leadFormStore";
import styles from "./LeadForm.module.css";

export const LeadForm: Component = () => {
  const handleFormSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log("Save data and then kick to schedule view");
  };

  const formValid = createMemo(() => {
    return (
      firstName().valid &&
      emailAddress().valid &&
      biggestPriority().value !== ""
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
      <TextInput
        inputType="tel"
        name="phoneNumber"
        labelFor="phoneNumber"
        labelName="Phone Number"
        labelInstructions="Enter your phone number"
        labelError="Must a full number"
        placeholder="Enter your phone number"
        optional={true}
        value={phoneNumber().value}
        valid={phoneNumber().valid}
        initial={phoneNumberOptions().initial}
        touched={phoneNumberOptions().touched}
        onInput={updatePhoneNumberValue}
        onFocus={updatePhoneNumberOptions}
        onBlur={updatePhoneNumberOptions}
        isLoading={false}
      />
      <RadioInput
        name="biggestPriority"
        questionLabel="What is your biggest priority now?"
        value={biggestPriority().value}
        options={biggestPriority().options}
        updateInputValue={updateBiggestPriority}
      />
      <TextInput
        inputType="text"
        name="currentSite"
        labelFor="currentSite"
        labelName="Current Site"
        labelInstructions="Enter your current site url"
        labelError="No error"
        placeholder="Enter your current site url"
        optional={true}
        value={currentSite().value}
        valid={currentSite().valid}
        initial={currentSiteOptions().initial}
        touched={currentSiteOptions().touched}
        onInput={updateCurrentSiteValue}
        onFocus={updateCurrentSiteOptions}
        onBlur={updateCurrentSiteOptions}
        isLoading={false}
      />
      <TextArea
        name="whyNow"
        labelFor="whyNow"
        labelName="Why is this important right now?"
        labelError="No error"
        labelInstructions="Try to be detailed"
        placeholder="Tell me why is your project important right now..."
        maxLength={400}
        rows={8}
        optional={true}
        value={whyNow().value}
        valid={whyNow().valid}
        initial={whyNowOptions().initial}
        touched={whyNowOptions().touched}
        onInput={updateWhyNowValue}
        onFocus={updateWhyNowptions}
        onBlur={updateWhyNowptions}
        isLoading={false}
      />
      <FormButton theme="teal" disabled={!formValid()}>
        Step 2 - Schecule Time
      </FormButton>
    </form>
  );
};