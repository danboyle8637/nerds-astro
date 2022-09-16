import type { Component } from "solid-js";

import { CheckboxInput } from "../inputs/CheckboxInput";
import {
  isBlogChecked,
  updateIsBlogchecked,
  updateIsBlogcheckedWithKeyboard,
  isPaymentsChecked,
  updateIsPaymentsChecked,
  updateIsPaymentsCheckedWithKeyboard,
} from "../../../../stores/forms";
import styles from "./NerdChatForm.module.css";

export const NerdChatForm: Component = () => {
  return (
    <div class={styles.test_container}>
      <CheckboxInput
        id="0"
        name="isBlogChecked"
        isChecked={isBlogChecked()}
        toggleIsToggleOn={updateIsBlogchecked}
        toggleIsToggleOnWithKeyboard={updateIsBlogcheckedWithKeyboard}
      >
        Create Blog Posts
      </CheckboxInput>
      <CheckboxInput
        id="1"
        name="isPaymentChecked"
        isChecked={isPaymentsChecked()}
        toggleIsToggleOn={updateIsPaymentsChecked}
        toggleIsToggleOnWithKeyboard={updateIsPaymentsCheckedWithKeyboard}
      >
        Take Payments or Send Invoices
      </CheckboxInput>
    </div>
  );
};
