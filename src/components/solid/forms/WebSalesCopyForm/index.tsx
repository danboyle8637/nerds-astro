import { createMemo, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { ExternalButton } from "../../buttons/ExternalButton";
import { webSalesPages, updateWebSalesPages } from "../../../../stores/forms";
import { shouldShow, setBreakPoint } from "../../../../solid/matchMediaStore";
import styles from "./WebSalesCopyForm.module.css";

export const WebSalesCopyForm: Component = () => {
  const [price, setPrice] = createSignal<number>(794);
  const [paymentLink, setPaymentLink] = createSignal<string>("");
  const [inputWidth, setInputWidth] = createSignal<number>(351);

  onMount(() => setBreakPoint(392));

  createMemo(() => {
    if (webSalesPages().value === 1) {
      setPrice(397);
      setPaymentLink("https://buy.stripe.com/9AQ2c44uJgkv240cN5");
    }

    if (webSalesPages().value === 2) {
      setPrice(794);
      setPaymentLink("https://buy.stripe.com/cN21803qF2tFbEAfZi");
    }

    if (webSalesPages().value === 3) {
      setPrice(1191);
      setPaymentLink("https://buy.stripe.com/cN21803qF2tFbEAfZi");
    }

    if (webSalesPages().value === 4) {
      setPrice(1588);
      setPaymentLink("https://buy.stripe.com/fZe4kc3qF8S36kgdRc");
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
    if (webSalesPages().value === 1) {
      return `Buy ${webSalesPages().value} Sales Page`;
    } else {
      return `Buy ${webSalesPages().value} Sales Pages`;
    }
  };

  return (
    <div class={styles.form_container}>
      <div class={styles.content_container}>
        <h3 class={styles.form_headline}>Purchase Web Sales Pages</h3>
        <p class={styles.form_description}>
          Select the number of sales pages you want. Currently the max is 3.
        </p>
      </div>
      <div class={styles.input_container}>
        <SliderRadioInput
          inputWidth={inputWidth()}
          label="Num of Sales Pages"
          name="webSalesCopy"
          startingValue={2}
          value={webSalesPages().value}
          options={webSalesPages().options}
          updateInputValue={updateWebSalesPages}
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
