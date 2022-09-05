import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

import { capitalizeName, updateOptions } from "../utils/utilityFunctions";
import { formValidator } from "../utils/validators/formValidators";
import { emailValidationRules } from "../utils/validators/rules";
import { leadFormOptions } from "../data/forms";
import type { InputValue, InputOptions, RadioInput } from "../types/forms";

interface InitialLeadForm {
  firstName: InputValue;
  firstNameOptions: InputOptions;
  emailAddress: InputValue;
  emailAddressOptions: InputOptions;
  phoneNumber: InputValue;
  phoneNumberOptions: InputOptions;
  currentSite: InputValue;
  currentSiteOptions: InputOptions;
  biggestPriority: RadioInput;
  whyNow: InputValue;
  whyNowOptions: InputOptions;
}

export const [isInitialLeadFormOverlayOpen, setIsInitialLeadFormOverlayOpen] =
  createSignal(false);

export const [initialLeadForm, setInitialLeadForm] =
  createStore<InitialLeadForm>({
    firstName: {
      value: "",
      valid: false,
    },
    firstNameOptions: {
      initial: true,
      touched: false,
    },
    emailAddress: {
      value: "",
      valid: false,
    },
    emailAddressOptions: {
      initial: true,
      touched: false,
    },
    phoneNumber: {
      value: "",
      valid: false,
    },
    phoneNumberOptions: {
      initial: true,
      touched: false,
    },
    currentSite: {
      value: "",
      valid: false,
    },
    currentSiteOptions: {
      initial: true,
      touched: false,
    },
    biggestPriority: {
      value: "",
      options: leadFormOptions,
    },
    whyNow: {
      value: "",
      valid: false,
    },
    whyNowOptions: {
      initial: true,
      touched: false,
    },
  });

export const toggleInitialLeadFormOverlayOpen = () => {
  setIsInitialLeadFormOverlayOpen((prevValue) => !prevValue);
};

export const updateInputValue = (event: InputEvent) => {
  const inputElement = event.currentTarget as
    | HTMLInputElement
    | HTMLTextAreaElement;

  const name = inputElement.name;
  const value = inputElement.value;

  switch (name) {
    case "firstName": {
      setInitialLeadForm("firstName", () => {
        const valid = value.length > 0;
        const name = capitalizeName(value);
        return {
          value: name,
          valid: valid,
        };
      });
    }
    case "emailAddress": {
      setInitialLeadForm("emailAddress", () => {
        const valid = formValidator(value, emailValidationRules);
        return {
          value: value.toLowerCase(),
          valid: valid,
        };
      });
    }
    case "phoneNumber": {
      setInitialLeadForm("phoneNumber", () => {
        return {
          value: value,
          valid: true,
        };
      });
    }
    case "currentSite": {
      setInitialLeadForm("currentSite", () => {
        return {
          value: value.toLowerCase(),
          valid: true,
        };
      });
    }
    case "biggestPriority": {
      setInitialLeadForm("biggestPriority", (prevValue) => {
        const optionsCopy = [...prevValue.options];
        const updatedOptions = updateOptions(optionsCopy, value);
        console.log(updatedOptions);
        return {
          value: value,
          options: updatedOptions,
        };
      });
    }
    case "whyNow": {
      setInitialLeadForm("whyNow", () => {
        const valid = value.length > 10;
        return {
          value: value,
          valid: valid,
        };
      });
    }
    default: {
      return initialLeadForm;
    }
  }
};

export const updateInputOptions = (event: FocusEvent) => {
  const inputElement = event.currentTarget as
    | HTMLInputElement
    | HTMLTextAreaElement;
  const name = inputElement.name;

  switch (name) {
    case "firstName": {
      setInitialLeadForm("firstNameOptions", (prevValue) => {
        return {
          initial: false,
          touched: !prevValue.touched,
        };
      });
    }
    case "emailAddress": {
      setInitialLeadForm("emailAddressOptions", (prevValue) => ({
        initia: false,
        touched: !prevValue.touched,
      }));
    }
    case "phoneNumber": {
      setInitialLeadForm("phoneNumberOptions", (prevValue) => ({
        initial: false,
        touched: !prevValue.touched,
      }));
    }
    case "currentSite": {
      setInitialLeadForm("currentSiteOptions", (prevValue) => ({
        initial: false,
        touched: !prevValue.touched,
      }));
    }
    case "biggestPriority": {
      break;
    }
    case "whyNow": {
      setInitialLeadForm("whyNowOptions", (prevValue) => ({
        initial: false,
        touched: !prevValue.touched,
      }));
    }
    default: {
      setInitialLeadForm(initialLeadForm);
    }
  }
};

export const resetForm = () => {
  setInitialLeadForm(initialLeadForm);
};
