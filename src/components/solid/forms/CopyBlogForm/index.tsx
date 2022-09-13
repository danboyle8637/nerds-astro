import { createEffect, createMemo, createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { SliderRadioInput } from "../inputs/SliderRadioInput";
import { blogPosts, updateBlogPosts } from "../../../../stores/forms";
import { shouldShow, setBreakPoint } from "../../../../solid/matchMediaStore";
import styles from "./CopyBlogForm.module.css";

export const CopyBlogForm: Component = () => {
  const [price, setPrice] = createSignal<number>(250);
  const [inputWidth, setInputWidth] = createSignal<number>(351);

  onMount(() => setBreakPoint(392));

  createMemo(() => {
    if (blogPosts().value === 1) {
      setPrice(125);
    }

    if (blogPosts().value === 2) {
      setPrice(250);
    }

    if (blogPosts().value === 3) {
      setPrice(350);
    }

    if (blogPosts().value === 4) {
      setPrice(475);
    }

    if (blogPosts().value === 5) {
      setPrice(600);
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
      </div>

      <div class={styles.button_container}></div>
    </div>
  );
};
