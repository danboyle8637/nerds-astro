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

      switch (products().value) {
        case 1: {
          setPaymentLink("https://buy.stripe.com/5kA4kc2mB1pBcIE9AX");
          break;
        }
        case 2: {
          setPaymentLink("https://buy.stripe.com/bIY3g8e5j3xJaAw14s");
          break;
        }
        case 3: {
          setPaymentLink("https://buy.stripe.com/eVadUM1ix7NZ8soeVj");
          break;
        }
        case 4: {
          setPaymentLink("https://buy.stripe.com/28o7woe5jb0b38414u");
          break;
        }
        case 5: {
          setPaymentLink("https://buy.stripe.com/3cs9Ew6CR7NZbEAbJ9");
          break;
        }
        case 6: {
          setPaymentLink("https://buy.stripe.com/28odUMaT74BNdMI4gI");
          break;
        }
        case 7: {
          setPaymentLink("https://buy.stripe.com/14k4kc1ix8S35gceVn");
          break;
        }
        case 8: {
          setPaymentLink("https://buy.stripe.com/eVa5oggdrgkv8socNg");
          break;
        }
        case 9: {
          setPaymentLink("https://buy.stripe.com/7sI2c41ix5FR384dRl");
          break;
        }
        case 10: {
          setPaymentLink("https://buy.stripe.com/8wM4kcd1f7NZ4c828E");
          break;
        }
      }
    }

    if (productType().value === 2) {
      const price = 200 * products().value;
      setPrice(price);

      switch (products().value) {
        case 1: {
          setPaymentLink("https://buy.stripe.com/dR603WgdrfgrbEA9B7");
          break;
        }
        case 2: {
          setPaymentLink("https://buy.stripe.com/4gw7wo2mB0lxfUQaFc");
          break;
        }
        case 3: {
          setPaymentLink("https://buy.stripe.com/8wM03W7GV8S35gc28H");
          break;
        }
        case 4: {
          setPaymentLink("https://buy.stripe.com/cN2aIAf9nb0bgYU28I");
          break;
        }
        case 5: {
          setPaymentLink("https://buy.stripe.com/6oE1803qF1pB8sobJj");
          break;
        }
        case 6: {
          setPaymentLink("https://buy.stripe.com/3csbMEaT7b0b0ZW4gS");
          break;
        }
        case 7: {
          setPaymentLink("https://buy.stripe.com/6oE2c48KZfgr0ZW8x9");
          break;
        }
        case 8: {
          setPaymentLink("https://buy.stripe.com/9AQg2U5yN0lxfUQ6p2");
          break;
        }
        case 9: {
          setPaymentLink("https://buy.stripe.com/aEU2c42mBecn2405kZ");
          break;
        }
        case 10: {
          setPaymentLink("https://buy.stripe.com/9AQdUM4uJfgrdMIbJo");
          break;
        }
      }
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
