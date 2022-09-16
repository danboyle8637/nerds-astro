import { createSignal } from "solid-js";

import {
  contactFormOptions,
  copyBlogOptions,
  productTypeOptions,
  copyEmailOptions,
  copyProductOptions,
  copyWebSalesCopyOptions,
  adCopyOptions,
  nerdCopyChatOptions,
} from "../data/forms";
import { updateSliderOptions, updateOptions } from "../utils/utilityFunctions";
import type {
  SliderRadioInput,
  SliderInputOption,
  SliderInputName,
  RadioInput,
  RadioOption,
  InputValue,
  InputOptions,
} from "../types/forms";

export const [isToggleOn, setIsToggleOn] = createSignal<boolean>(false);

export const toggleIsToggleOn = () => {
  setIsToggleOn((prevValue) => !prevValue);
};

export const toggleIsToggleToFalse = () => {
  setIsToggleOn(false);
};

export const toggleIsToggleWithKeyboard = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    setIsToggleOn((prevValue) => !prevValue);
  }
};

export const [blogPosts, setBlogPosts] = createSignal<SliderRadioInput>({
  value: 2,
  options: copyBlogOptions,
});

export const updateBlogPosts = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = Number(inputElement.value);

  setBlogPosts((prevValue) => {
    const optionsCopy = [...prevValue.options];
    const updatedOptions = updateSliderOptions(optionsCopy, value);

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const [emails, setEmails] = createSignal<SliderRadioInput>({
  value: 5,
  options: copyEmailOptions,
});

export const updateEmails = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = Number(inputElement.value);

  setEmails((prevValue) => {
    let updatedOptions: SliderInputOption[] = [];

    if (prevValue.value !== value) {
      const optionsCopy = [...prevValue.options];
      updatedOptions = updateSliderOptions(optionsCopy, value);
    }

    if (prevValue.value === value) {
      updatedOptions = prevValue.options;
    }

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const [productType, setProdcutType] = createSignal<SliderRadioInput>({
  value: 1,
  options: productTypeOptions,
});

export const updateProductType = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = Number(inputElement.value);

  setProdcutType((prevValue) => {
    let updatedOptions: SliderInputOption[] = [];

    if (prevValue.value !== value) {
      const optionsCopy = [...prevValue.options];
      updatedOptions = updateSliderOptions(optionsCopy, value);
    }

    if (prevValue.value === value) {
      updatedOptions = prevValue.options;
    }

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const [products, setProducts] = createSignal<SliderRadioInput>({
  value: 5,
  options: copyProductOptions,
});

export const updateProducts = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = Number(inputElement.value);

  setProducts((prevValue) => {
    let updatedOptions: SliderInputOption[] = [];

    if (prevValue.value !== value) {
      const optionsCopy = [...prevValue.options];
      updatedOptions = updateSliderOptions(optionsCopy, value);
    }

    if (prevValue.value === value) {
      updatedOptions = prevValue.options;
    }

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const [adCopy, setAdCopy] = createSignal<SliderRadioInput>({
  value: 1,
  options: adCopyOptions,
});

export const updateAdCopy = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = Number(inputElement.value);

  setAdCopy((prevValue) => {
    let updatedOptions: SliderInputOption[] = [];

    if (prevValue.value !== value) {
      const optionsCopy = [...prevValue.options];
      updatedOptions = updateSliderOptions(optionsCopy, value);
    }

    if (prevValue.value === value) {
      updatedOptions = prevValue.options;
    }

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const [nerdChatCopy, setNerdChatCopy] = createSignal<SliderRadioInput>({
  value: 1,
  options: nerdCopyChatOptions,
});

export const updateNerdChatCopy = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = Number(inputElement.value);

  setNerdChatCopy((prevValue) => {
    let updatedOptions: SliderInputOption[] = [];

    if (prevValue.value !== value) {
      const optionsCopy = [...prevValue.options];
      updatedOptions = updateSliderOptions(optionsCopy, value);
    }

    if (prevValue.value === value) {
      updatedOptions = prevValue.options;
    }

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const [webSalesPages, setWebSalesPages] = createSignal<SliderRadioInput>(
  {
    value: 2,
    options: copyWebSalesCopyOptions,
  }
);

export const updateWebSalesPages = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = Number(inputElement.value);

  setWebSalesPages((prevValue) => {
    const optionsCopy = [...prevValue.options];
    const updatedOptions = updateSliderOptions(optionsCopy, value);

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const handleSliderKeyboardEvent = (
  event: KeyboardEvent,
  inputName: SliderInputName,
  value: number
) => {
  if (event.key === "Enter") {
    switch (inputName) {
      case "blogPosts": {
        setBlogPosts((prevValue) => {
          const optionsCopy = [...prevValue.options];
          const updatedOptions = updateSliderOptions(optionsCopy, value);

          return {
            value: value,
            options: updatedOptions,
          };
        });
        break;
      }
      case "ecomProducts": {
        setProducts((prevValue) => {
          const optionsCopy = [...prevValue.options];
          const updatedOptions = updateSliderOptions(optionsCopy, value);

          return {
            value: value,
            options: updatedOptions,
          };
        });
        break;
      }
      case "emails": {
        setEmails((prevValue) => {
          const optionsCopy = [...prevValue.options];
          const updatedOptions = updateSliderOptions(optionsCopy, value);

          return {
            value: value,
            options: updatedOptions,
          };
        });
        break;
      }
      case "webSalesCopy": {
        setWebSalesPages((prevValue) => {
          const optionsCopy = [...prevValue.options];
          const updatedOptions = updateSliderOptions(optionsCopy, value);

          return {
            value: value,
            options: updatedOptions,
          };
        });
        break;
      }
      default: {
        return;
      }
    }
  }
};

export const [contactFormReason, setContactFormReason] =
  createSignal<RadioInput>({
    value: "",
    options: contactFormOptions,
  });

export const updateContactFormReason = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLInputElement;
  const value = inputElement.value;

  setContactFormReason((prevValue) => {
    let updatedOptions: RadioOption[] = [];

    if (prevValue.value !== value) {
      const optionsCopy = [...prevValue.options];
      updatedOptions = updateOptions(optionsCopy, value);
    }

    if (prevValue.value === value) {
      updatedOptions = prevValue.options;
    }

    return {
      value: value,
      options: updatedOptions,
    };
  });
};

export const [contactMessage, setContactMessage] = createSignal<InputValue>({
  value: "",
  valid: false,
});

export const [contactMessageOptions, setContactMessageOptions] =
  createSignal<InputOptions>({
    initial: true,
    touched: false,
  });

export const updateContactMessageValue = (event: InputEvent) => {
  const inputElement = event.currentTarget as HTMLTextAreaElement;
  const value = inputElement.value;
  const valid = value.length > 0;

  setContactMessage({
    value: value,
    valid: valid,
  });
};

export const updateContactMessageOptions = () => {
  setContactMessageOptions((prevValue) => {
    return {
      initial: false,
      touched: !prevValue.touched,
    };
  });
};

/*

*/

export const [isBlogChecked, setIsBlogChecked] = createSignal<boolean>(false);

export const updateIsBlogchecked = () => {
  setIsBlogChecked((prevValue) => !prevValue);
};

export const updateIsBlogcheckedWithKeyboard = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    setIsBlogChecked((prevValue) => !prevValue);
  }
};

export const [isSchedulingChecked, setIsSchedulingChecked] =
  createSignal<boolean>(false);

export const updateIsSchedulingChecked = () => {
  setIsSchedulingChecked((prevValue) => !prevValue);
};

export const updateIsSchedulingCheckedWithKeyboard = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    setIsSchedulingChecked((prevValue) => !prevValue);
  }
};

export const [isLoginLogoutChecked, setIsLoginLogoutChecked] =
  createSignal<boolean>(false);

export const updateIsLoginLogoutChecked = () => {
  setIsLoginLogoutChecked((prevValue) => !prevValue);
};

export const updateIsLoginLogoutCheckedWithKeyboard = (
  event: KeyboardEvent
) => {
  if (event.key === "Enter") {
    setIsLoginLogoutChecked((prevValue) => !prevValue);
  }
};

export const [isPaymentsChecked, setIsPaymentsChecked] =
  createSignal<boolean>(false);

export const updateIsPaymentsChecked = () => {
  setIsPaymentsChecked((prevValue) => !prevValue);
};

export const updateIsPaymentsCheckedWithKeyboard = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    setIsPaymentsChecked((prevValue) => !prevValue);
  }
};

export const [isSomethingElseChecked, setIsSomethingElseChecked] =
  createSignal<boolean>(false);

export const updateIsSomethingElseChecked = () => {
  setIsSomethingElseChecked((prevValue) => !prevValue);
};

export const updateIsSomethingElseCheckedWithKeyboard = (
  event: KeyboardEvent
) => {
  if (event.key === "Enter") {
    setIsSomethingElseChecked((prevValue) => !prevValue);
  }
};
