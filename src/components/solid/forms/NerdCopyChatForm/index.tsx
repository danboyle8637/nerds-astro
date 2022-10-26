import { createMemo, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { ExternalButton } from "../../buttons/ExternalButton";
import { nerdChatCopy, updateNerdChatCopy } from "../../../../stores/forms";
import { shouldShow, setBreakPoint } from "../../../../solid/matchMediaStore";
import styles from "./NerdCopyChat.module.css";

export const NerdCopyChatForm: Component = () => {
  const [price, setPrice] = createSignal<number>(250);
  const [paymentLink, setPaymentLink] = createSignal<string>("");
  const [inputWidth, setInputWidth] = createSignal<number>(351);

  onMount(() => setBreakPoint(392));

  createMemo(() => {
    if (nerdChatCopy().value === 1) {
      setPrice(60);
      setPaymentLink("https://buy.stripe.com/4gw9Ew7GV4BNbEAdR7");
    }

    if (nerdChatCopy().value === 2) {
      setPrice(97);
      setPaymentLink("https://buy.stripe.com/9AQ9Ewf9n0lx8so00i");
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
    if (nerdChatCopy().value === 1) {
      return `Buy 30 Minutes`;
    } else {
      return `Buy 60 Minutes`;
    }
  };

  return (
    <div class={styles.form_container}>
      <div class={styles.content_container}>
        <h3 class={styles.form_headline}>Purchase a Nerd Copy Chat</h3>
        <p class={styles.form_description}>
          Select if you want 30 minutes or 60 minutes. Then let's go deep your
          copy and offer so you can make some money!
        </p>
      </div>
      <div class={styles.input_container}>
        <SliderRadioInput
          inputWidth={inputWidth()}
          label="How long would like to chat?"
          name="nerdCopyChat"
          startingValue={1}
          value={nerdChatCopy().value}
          options={nerdChatCopy().options}
          updateInputValue={updateNerdChatCopy}
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
