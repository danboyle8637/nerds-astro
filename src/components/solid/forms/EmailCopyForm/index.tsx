import { createEffect, createMemo, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { EmailTypeIndicator } from "./EmailTypeIndicator";
import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { ExternalButton } from "../../buttons/ExternalButton";
import { emails, updateEmails } from "../../../../stores/forms";
import { shouldShow, setBreakPoint } from "../../../../solid/matchMediaStore";
import styles from "./EmailCopyForm.module.css";

export const EmailCopyForm: Component = (props) => {
  const [price, setPrice] = createSignal<number>(794);
  const [paymentLink, setPaymentLink] = createSignal<string>("");
  const [inputWidth, setInputWidth] = createSignal<number>(351);

  onMount(() => setBreakPoint(392));

  createMemo(() => {
    if (emails().value === 1) {
      setPrice(100);
      setPaymentLink("#");
    }

    if (emails().value === 2) {
      setPrice(177);
      setPaymentLink("#");
    }

    if (emails().value === 3) {
      setPrice(247);
      setPaymentLink("#");
    }

    if (emails().value === 4) {
      setPrice(297);
      setPaymentLink("#");
    }

    if (emails().value === 5) {
      setPrice(347);
      setPaymentLink("#");
    }

    if (emails().value === 6) {
      setPrice(397);
      setPaymentLink("#");
    }

    if (emails().value === 7) {
      setPrice(447);
      setPaymentLink("#");
    }

    if (emails().value === 8) {
      setPrice(497);
      setPaymentLink("#");
    }

    if (emails().value === 9) {
      setPrice(547);
      setPaymentLink("#");
    }

    if (emails().value === 10) {
      setPrice(597);
      setPaymentLink("#");
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
    if (emails().value === 1) {
      return `Buy ${emails().value} Email`;
    } else {
      return `Buy ${emails().value} Eamils`;
    }
  };

  return (
    <div class={styles.form_container}>
      <div class={styles.content_container}>
        <h3 class={styles.form_headline}>Purchase Email Copy</h3>
        <p class={styles.form_description}>
          Select if you want a broadcase or automation. If automation, select
          the number of emails you want.
        </p>
      </div>
      <div class={styles.inputs_price_container}>
        <div class={styles.input_container}>
          <SliderRadioInput
            inputWidth={inputWidth()}
            label="Num of Emails"
            name="emails"
            startingValue={5}
            value={emails().value}
            options={emails().options}
            updateInputValue={updateEmails}
          />
          <EmailTypeIndicator />
        </div>
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
