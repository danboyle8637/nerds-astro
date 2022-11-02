import { createMemo } from "solid-js";
import type { Component } from "solid-js";

import { TextInput } from "../inputs/TextInput";
import { TextArea } from "../inputs/TextArea";
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
  areaCode,
  firstThree,
  lastFour,
  sevenDaySiteUseCase,
  updateSevenDaySiteUseCase,
  updateEmailAddressValue,
  updateEmailAddressOptions,
  currentSite,
  currentSiteOptions,
  updateCurrentSiteValue,
  updateCurrentSiteOptions,
  whyNow,
  whyNowOptions,
  updateWhyNowValue,
  updateWhyNowptions,
} from "../../../../stores/leadFormStore";
import type { SevenDaySiteFormBody } from "../../../../types/forms";
import styles from "./SevenDaySiteForm.module.css";

export const SevenDaySiteForm: Component = () => {
  const handleFormSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const phoneNumber = `(${areaCode().value}) ${firstThree().value} - ${
      lastFour().value
    }`;

    const reqBody: SevenDaySiteFormBody = {
      timestamp: Date.now(),
      firstName: firstName().value,
      emailAddress: emailAddress().value,
      phoneNumber: phoneNumber,
      websiteGoal: sevenDaySiteUseCase().value,
      currentWebsite: currentSite().value,
      whyImportant: whyNow().value,
    };

    const res = await fetch(
      `http://127.0.0.1:8787/handle-seven-day-site-form`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      }
    );

    if (res.status !== 200) {
      throw new Error("Need to create an error block");
    }

    // show success and then redirect to step 2
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
        name="biggestPriority"
        questionLabel="What's your seven day site goal?"
        value={sevenDaySiteUseCase().value}
        options={sevenDaySiteUseCase().options}
        updateInputValue={updateSevenDaySiteUseCase}
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
