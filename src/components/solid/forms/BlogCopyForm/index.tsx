import { createMemo, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { ExternalButton } from "../../buttons/ExternalButton";
import { blogPosts, updateBlogPosts } from "../../../../stores/forms";
import { shouldShow, setBreakPoint } from "../../../../solid/matchMediaStore";
import styles from "./BlogCopyForm.module.css";

export const BlogCopyForm: Component = () => {
  const [price, setPrice] = createSignal<number>(250);
  const [paymentLink, setPaymentLink] = createSignal<string>("");
  const [inputWidth, setInputWidth] = createSignal<number>(351);

  onMount(() => setBreakPoint(392));

  createMemo(() => {
    if (blogPosts().value === 1) {
      setPrice(125);
      setPaymentLink("https://buy.stripe.com/8wM1807GV5FRgYU002");
    }

    if (blogPosts().value === 2) {
      setPrice(250);
      setPaymentLink("https://buy.stripe.com/14kdUMaT7gkv384cMP");
    }

    if (blogPosts().value === 3) {
      setPrice(350);
      setPaymentLink("https://buy.stripe.com/bIYg2Ugdrgkv6kgfZ2");
    }

    if (blogPosts().value === 4) {
      setPrice(450);
      setPaymentLink("https://buy.stripe.com/8wM3g86CR4BN2404gl");
    }

    if (blogPosts().value === 5) {
      setPrice(550);
      setPaymentLink("https://buy.stripe.com/14kbME5yNc4f9ws7sy");
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
    if (blogPosts().value === 1) {
      return `Buy ${blogPosts().value} Blog Post`;
    } else {
      return `Buy ${blogPosts().value} Blog Posts`;
    }
  };

  return (
    <div class={styles.form_container}>
      <div class={styles.content_container}>
        <h3 class={styles.form_headline}>Purchase Blog Posts</h3>
        <p class={styles.form_description}>
          Select the number of blog posts you want. Currently the max is 5.
        </p>
      </div>
      <div class={styles.input_container}>
        <SliderRadioInput
          inputWidth={inputWidth()}
          label="Num of Blog Posts"
          name="blogPosts"
          startingValue={2}
          value={blogPosts().value}
          options={blogPosts().options}
          updateInputValue={updateBlogPosts}
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
