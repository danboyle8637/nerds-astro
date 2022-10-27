import { createMemo, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { ExternalButton } from "../../buttons/ExternalButton";
import {
  products,
  updateProducts,
  productType,
  updateProductType,
} from "../../../../stores/forms";
import { shouldShow, setBreakPoint } from "../../../../solid/matchMediaStore";
import styles from "./ProductCopyForm.module.css";

export const ProductCopyForm: Component = () => {
  const [price, setPrice] = createSignal<number>(794);
  const [paymentLink, setPaymentLink] = createSignal<string>("");
  const [inputWidth, setInputWidth] = createSignal<number>(351);

  onMount(() => setBreakPoint(392));

  createMemo(() => {
    if (productType().value === 1) {
      const price = 40 * products().value;
      setPrice(price);
      setPaymentLink("#");
    }

    if (productType().value === 2) {
      const price = 200 * products().value;
      setPrice(price);
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
    if (products().value === 1) {
      return `Buy ${products().value} Product`;
    } else {
      return `Buy ${products().value} Products`;
    }
  };

  return (
    <div class={styles.form_container}>
      <div class={styles.content_container}>
        <h3 class={styles.form_headline}>Purchase Product Description Copy</h3>
        <p class={styles.form_description}>
          Select if you want short or long copy. Then select how many products
          you want. 10 is the max right now. Keep in mind long copy is
          expensive.
        </p>
      </div>
      <div class={styles.inputs_price_container}>
        <div class={styles.input_container}>
          <SliderRadioInput
            inputWidth={inputWidth()}
            label="Product Copy Type"
            name="ecomProductType"
            startingValue={1}
            value={productType().value}
            options={productType().options}
            updateInputValue={updateProductType}
          />
          <SliderRadioInput
            inputWidth={inputWidth()}
            label="Num of Products"
            name="ecomProducts"
            startingValue={5}
            value={products().value}
            options={products().options}
            updateInputValue={updateProducts}
          />
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
