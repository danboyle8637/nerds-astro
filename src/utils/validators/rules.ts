import type { Rules } from "./formValidators";

export const firstNameValidationRules: Rules = {
  minLength: 1,
  isRequired: true,
};

export const emailValidationRules: Rules = {
  minLength: 4,
  isEmail: true,
  isRequired: true,
};

export const contactMessageValidationRules: Rules = {
  maxLength: 400,
  isRequired: true,
};
