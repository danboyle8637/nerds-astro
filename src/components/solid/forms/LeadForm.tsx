import type { Component } from "solid-js";

import { TextInput } from "./inputs/TextInput";
import { TextArea } from "./inputs/TextArea";
import { RadioInput } from "./inputs/RadioInput";
import {
  initialLeadForm,
  updateInputValue,
  updateInputOptions,
} from "../../../stores/leadFormStore";

export const LeadForm: Component = () => {
  return (
    <RadioInput
      name="biggestPriority"
      questionLabel="What is your biggest priority now?"
      options={initialLeadForm.biggestPriority.options}
      updateInputValue={updateInputValue}
    />
  );
};
