import type { Component } from "solid-js";

import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { TextArea } from "../inputs/TextArea";
import { CheckboxInput } from "../inputs/CheckboxInput";
import { CheckboxOption } from "../inputs/CheckboxInput/CheckboxOption";
import { RadioInput } from "../inputs/RadioInput";
import { FormButton } from "../../buttons/FormButton";
import {
  haveSiteDesign,
  updateHaveSiteDesign,
  favorteSiteDesigns,
  favorteSiteDesignsOptions,
  updateFavoriteSiteDesignValue,
  updateFavoriteSiteDesignOptions,
  isBlogChecked,
  updateIsBlogchecked,
  updateIsBlogcheckedWithKeyboard,
  isSchedulingChecked,
  updateIsSchedulingChecked,
  updateIsSchedulingCheckedWithKeyboard,
  isLoginLogoutChecked,
  updateIsLoginLogoutChecked,
  updateIsLoginLogoutCheckedWithKeyboard,
  isPaymentsChecked,
  updateIsPaymentsChecked,
  updateIsPaymentsCheckedWithKeyboard,
  isSomethingElseChecked,
  updateIsSomethingElseChecked,
  updateIsSomethingElseCheckedWithKeyboard,
  siteTimeline,
  updateSiteTimeline,
  additionalInfo,
  additionalInfoOptions,
  updateAdditionalInfoValue,
  updateAdditionalInfoOptions,
} from "../../../../stores/forms";
import styles from "./NerdChatForm.module.css";

export const PreNerdChatForm: Component = () => {
  return (
    <form class={styles.form_container}>
      <div class={styles.inputs_container}>
        <SliderRadioInput
          inputWidth={351}
          label="Do you have a site design?"
          name="haveSiteDesign"
          startingValue={1}
          value={haveSiteDesign().value}
          options={haveSiteDesign().options}
          updateInputValue={updateHaveSiteDesign}
        />
        <TextArea
          name="favoriteSiteDesign"
          labelFor="favoriteSiteDesign"
          labelName="Have 3 to 5 favorite site designs?"
          labelInstructions=""
          labelError=""
          placeholder="If you have favorite websites... tell me..."
          optional={true}
          maxLength={400}
          rows={5}
          value={favorteSiteDesigns().value}
          valid={favorteSiteDesigns().valid}
          initial={favorteSiteDesignsOptions().initial}
          touched={favorteSiteDesignsOptions().touched}
          onInput={updateFavoriteSiteDesignValue}
          onFocus={updateFavoriteSiteDesignOptions}
          onBlur={updateFavoriteSiteDesignOptions}
          isLoading={false}
        />
        <CheckboxInput questionLabel="Anything special? Check all that apply">
          <CheckboxOption
            name="blog"
            isChecked={isBlogChecked()}
            toggleIsToggleOn={updateIsBlogchecked}
            toggleIsToggleOnWithKeyboard={updateIsBlogcheckedWithKeyboard}
          >
            I need a blog
          </CheckboxOption>
          <CheckboxOption
            name="scheduling"
            isChecked={isSchedulingChecked()}
            toggleIsToggleOn={updateIsSchedulingChecked}
            toggleIsToggleOnWithKeyboard={updateIsSchedulingCheckedWithKeyboard}
          >
            The ability for custom scheduling
          </CheckboxOption>
          <CheckboxOption
            name="loginLogout"
            isChecked={isLoginLogoutChecked()}
            toggleIsToggleOn={updateIsLoginLogoutChecked}
            toggleIsToggleOnWithKeyboard={
              updateIsLoginLogoutCheckedWithKeyboard
            }
          >
            I need users to login and logout
          </CheckboxOption>
          <CheckboxOption
            name="payment"
            isChecked={isPaymentsChecked()}
            toggleIsToggleOn={updateIsPaymentsChecked}
            toggleIsToggleOnWithKeyboard={updateIsPaymentsCheckedWithKeyboard}
          >
            I need payment and/or invoicing
          </CheckboxOption>
          <CheckboxOption
            name="somethingElse"
            isChecked={isSomethingElseChecked()}
            toggleIsToggleOn={updateIsSomethingElseChecked}
            toggleIsToggleOnWithKeyboard={
              updateIsSomethingElseCheckedWithKeyboard
            }
          >
            I need something else too
          </CheckboxOption>
        </CheckboxInput>
        <RadioInput
          name="timeline"
          questionLabel="What is your timeline?"
          value={siteTimeline().value}
          options={siteTimeline().options}
          updateInputValue={updateSiteTimeline}
        />
        <TextArea
          name="additionalInformation"
          labelFor="addtiaionalInformation"
          labelName="Anything else you want to add?"
          labelInstructions=""
          labelError=""
          placeholder="If there's anything else, write it here..."
          optional={true}
          maxLength={400}
          rows={5}
          value={additionalInfo().value}
          valid={additionalInfo().valid}
          initial={additionalInfoOptions().initial}
          touched={additionalInfoOptions().touched}
          onInput={updateAdditionalInfoValue}
          onFocus={updateAdditionalInfoOptions}
          onBlur={updateAdditionalInfoOptions}
          isLoading={false}
        />
      </div>
      <FormButton theme="teal" disabled={false}>
        Send My Answers
      </FormButton>
    </form>
  );
};
