import { createSignal } from "solid-js";

import { capitalizeName, updateOptions } from "../utils/utilityFunctions";
import { formValidator } from "../utils/validators/formValidators";
import { emailValidationRules } from "../utils/validators/rules";
import {
  leadFormOptions,
  sevenDaySiteOptions,
  copywritingTimelineOptions,
  webDesignOptions,
} from "../data/forms";
import type { InputValue, InputOptions, RadioInput } from "../types/forms";

export const [isInitialLeadFormOverlayOpen, setIsInitialLeadFormOverlayOpen] =
  createSignal(false);

export const [firstName, setFirstName] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [firstNameOptions, setFirstNameOptions] =
  createSignal<InputOptions>({
    initial: true,
    touched: false,
  });

export const [emailAddress, setEmailAddress] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [emailAddressOptions, setEmailAddressOptions] =
  createSignal<InputOptions>({
    initial: true,
    touched: false,
  });

export const [areaCode, setAreaCode] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [areaCodeOptions, setAreaCodeOptions] = createSignal<InputOptions>(
  {
    initial: true,
    touched: false,
  }
);

export const [firstThree, setFirstThree] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [firstThreeOptions, setFirstThreeOptions] =
  createSignal<InputOptions>({
    initial: true,
    touched: false,
  });

export const [lastFour, setLastFour] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [lastFourOptions, setLastFourOptions] = createSignal<InputOptions>(
  {
    initial: true,
    touched: false,
  }
);

export const [currentSite, setCurrentSite] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [currentSiteOptions, setCurrentSiteOptions] =
  createSignal<InputOptions>({
    initial: true,
    touched: false,
  });

export const [whyNow, setWhyNow] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [whyNowOptions, setWhyNowOptions] = createSignal<InputOptions>({
  initial: true,
  touched: false,
});

export const [biggestPriority, setBiggestPriority] = createSignal<RadioInput>({
  value: "",
  options: leadFormOptions,
});

export const [webDesignPriority, setWebDesignPriority] =
  createSignal<RadioInput>({
    value: "",
    options: webDesignOptions,
  });

export const [sevenDaySiteUseCase, setSevenDaySiteUseCase] =
  createSignal<RadioInput>({
    value: "",
    options: sevenDaySiteOptions,
  });

export const [copyTimeline, setCopyTimeline] = createSignal<RadioInput>({
  value: "",
  options: copywritingTimelineOptions,
});

export const updateFirstNameValue = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setFirstName(() => {
    const valid = value.length > 1;
    const name = capitalizeName(value);

    return {
      value: name,
      valid: valid,
    };
  });
};

export const updateFirstNameOptions = (event: FocusEvent) => {
  setFirstNameOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

export const updateEmailAddressValue = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setEmailAddress(() => {
    const valid = formValidator(value, emailValidationRules);
    const email = value.toLowerCase();

    return {
      value: email,
      valid: valid,
    };
  });
};

export const updateEmailAddressOptions = (event: FocusEvent) => {
  setEmailAddressOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

export const updateAreaCode = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value.slice(0, 3);

  setAreaCode(() => {
    return {
      value: value,
      valid: value.length === 3,
    };
  });
};

export const updateAreaCodeOptions = () => {
  setAreaCodeOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

export const updateFirstThree = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value.slice(0, 3);

  setFirstThree(() => {
    return {
      value: value,
      valid: value.length === 3,
    };
  });
};

export const updateFirstThreeOptions = () => {
  setFirstThreeOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

export const updateLastFour = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value.slice(0, 4);

  setLastFour(() => {
    return {
      value: value,
      valid: value.length === 4,
    };
  });
};

export const updateLastFourOptions = () => {
  setLastFourOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

export const updateCurrentSiteValue = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setCurrentSite(() => {
    return {
      value: value,
      valid: true,
    };
  });
};

export const updateCurrentSiteOptions = (event: FocusEvent) => {
  setCurrentSiteOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

export const updateWhyNowValue = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLTextAreaElement;
  const value = inputElement.value;
  const valid = value.length > 5;

  setWhyNow(() => {
    return {
      value: value,
      valid: valid,
    };
  });
};

export const updateWhyNowptions = (event: FocusEvent) => {
  setWhyNowOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

export const updateBiggestPriority = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setBiggestPriority((prevValue) => {
    const optionsCopy = [...prevValue.options];
    const updatedOptions = updateOptions(optionsCopy, value);

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const updateWebDesignPriority = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setWebDesignPriority((prevValue) => {
    const optionsCopy = [...prevValue.options];
    const updatedOptions = updateOptions(optionsCopy, value);

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const updateSevenDaySiteUseCase = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setSevenDaySiteUseCase((prevValue) => {
    const optionsCopy = [...prevValue.options];
    const updatedOptions = updateOptions(optionsCopy, value);

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const updateCopyTimeline = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setCopyTimeline((prevValue) => {
    const optionsCopy = [...prevValue.options];
    const updatedOptions = updateOptions(optionsCopy, value);

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const toggleInitialLeadFormOverlayOpen = () => {
  setIsInitialLeadFormOverlayOpen((prevValue) => !prevValue);
};

export const resetForm = () => {
  setFirstName({
    value: "",
    valid: false,
  });
  setFirstNameOptions({
    initial: true,
    touched: false,
  });
};
