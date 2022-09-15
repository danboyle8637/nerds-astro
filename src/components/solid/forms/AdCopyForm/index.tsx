import { createMemo, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { ExternalButton } from "../../buttons/ExternalButton";
import { adCopy, updateAdCopy } from "../../../../stores/forms";
import { shouldShow, setBreakPoint } from "../../../../solid/matchMediaStore";
import styles from "./AdCopyForm.module.css";

export const AdCopyForm: Component = () => {
  const [price, setPrice] = createSignal<number>(250);
  const [paymentLink, setPaymentLink] = createSignal<string>("");
  const [inputWidth, setInputWidth] = createSignal<number>(351);

  onMount(() => setBreakPoint(392));

  createMemo(() => {
    if (adCopy().value === 1) {
      setPrice(47);
      setPaymentLink("");
    }

    if (adCopy().value === 2) {
      setPrice(69);
      setPaymentLink("");
    }
  });

  createMemo(() => {
    if (shouldShow()) {
      setInputWidth(351);
    }

    if (!shouldShow()) {
      setInputWidth(311);
    }
  });

  const buttonLabel = () => {
    if (adCopy().value === 1) {
      return `Buy Google Ads`;
    } else {
      return `Buy Facebook Ads`;
    }
  };

  return (
    <div class={styles.form_container}>
      <div class={styles.content_container}>
        <h3 class={styles.form_headline}>Purchase Digial Ad Copy</h3>
        <p class={styles.form_description}>
          Select if you'd prefer to have Google or Facebook Ads. Come back and
          purchase again if you want both.
        </p>
      </div>
      <div class={styles.input_container}>
        <SliderRadioInput
          inputWidth={inputWidth()}
          label="Which Ad Platform Do You Want?"
          name="adCopy"
          startingValue={1}
          value={adCopy().value}
          options={adCopy().options}
          updateInputValue={updateAdCopy}
        />
        <div class={styles.price_container}>
          <p class={styles.price_sign}>$</p>
          <p class={styles.price}>{price()}</p>
        </div>
        <ExternalButton theme="teal" url={paymentLink()}>
          {buttonLabel()}
        </ExternalButton>
      </div>
    </div>
  );
};
