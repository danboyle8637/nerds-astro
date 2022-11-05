import { createSignal, createMemo } from "solid-js";
import type { Component } from "solid-js";

import { TextInput } from "../inputs/TextInput";
import { TextArea } from "../inputs/TextArea";
import { RadioInput } from "../inputs/RadioInput";
import { PhoneInput } from "../inputs/PhoneInput";
import { FormButton } from "../../../solid/buttons/FormButton";
import { ShortMessageOverlay } from "../../overlays/ShortMessageOverlay";
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
  webDesignPriority,
  updateWebDesignPriority,
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
  isFetchCallActive,
  toggleIsFetchCallActive,
  resetWebDesignForm,
} from "../../../../stores/leadFormStore";
import type { WebDesignFormBody } from "../../../../types/forms";
import styles from "./LeadForm.module.css";

export const LeadForm: Component = () => {
  const [isFetchError, setIsFetchError] = createSignal<boolean>(false);

  const updateIsFetchError = (status: boolean) => {
    setIsFetchError(status);
  };

  const handleFormSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    toggleIsFetchCallActive();

    const phoneNumber = `(${areaCode().value}) ${firstThree().value} - ${
      lastFour().value
    }`;

    const reqBody: WebDesignFormBody = {
      timestamp: Date.now(),
      firstName: firstName().value,
      emailAddress: emailAddress().value,
      phoneNumber: phoneNumber,
      websitePriority: webDesignPriority().value,
      currentWebsite: currentSite().value,
      whyImportant: whyNow().value,
    };

    const url = import.meta.env.DEV
      ? `${import.meta.env.PUBLIC_DEV_ENDPOINT}/handle-web-design-form`
      : `${import.meta.env.PUBLIC_API_ENDPOINT}/handle-web-design-form`;

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
      resetWebDesignForm();
      return;
    }

    toggleIsFetchCallActive();

    if (window) {
      const url = import.meta.env.DEV
        ? "http://localhost:3000/nerd-chat/schedule"
        : "https://nerdswhosell.com/nerd-chat/schedule";

      window.location.replace(url);
    }
  };

  const formValid = createMemo(() => {
    return (
      firstName().valid &&
      emailAddress().valid &&
      webDesignPriority().value !== ""
    );
  });

  return (
    <>
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
          isLoading={isFetchCallActive()}
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
          isLoading={isFetchCallActive()}
        />
        <PhoneInput isLoading={false} optional={true} />
        <RadioInput
          name="biggestPriority"
          questionLabel="What is your website priority now?"
          value={webDesignPriority().value}
          options={webDesignPriority().options}
          updateInputValue={updateWebDesignPriority}
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
          isLoading={isFetchCallActive()}
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
          isLoading={isFetchCallActive()}
        />
        <FormButton theme="teal" disabled={!formValid()}>
          Step 2 - Schedule Time
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
