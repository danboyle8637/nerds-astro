import { createSignal, createEffect, children } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import { MonthIcon } from "../../../svgs/MonthIcon";
import type { AccentColor } from "../../../../types/styles";
import styles from "./FormButton.module.css";

interface FormButtonProps {
  theme: AccentColor;
  disabled: boolean;
  children: JSXElement;
}

export const FormButton: Component<FormButtonProps> = (props) => {
  const child = children(() => props.children);
  let buttonRef: HTMLButtonElement;

  const [isHovering, setIsHovering] = createSignal<boolean>(false);

  createEffect(() => {
    const hasActiveClass = buttonRef.classList.contains(
      styles.form_button_active
    );

    if (isHovering() && !hasActiveClass) {
      buttonRef.classList.add(styles.form_button_active);
    }

    if (!isHovering() && hasActiveClass) {
      buttonRef.classList.remove(styles.form_button_active);
    }
  });

  createEffect(() => {
    if (props.disabled) {
      buttonRef.classList.add(styles.form_button_disabled);
    }

    if (!props.disabled) {
      buttonRef.classList.remove(styles.form_button_disabled);
    }
  });

  const toggleButtonHover = () => {
    setIsHovering((prevValue) => !prevValue);
  };

  return (
    <div class={styles.form_button_container}>
      <button
        ref={buttonRef!}
        type="submit"
        class={
          props.theme === "teal"
            ? styles.form_button_teal
            : props.theme === "purple"
            ? styles.form_button_purple
            : styles.form_button_pink
        }
        onMouseOver={toggleButtonHover}
        onMouseLeave={toggleButtonHover}
        disabled={props.disabled}
      >
        <div class={styles.button_icon}>
          <MonthIcon theme="dark" />
        </div>
        {child()}
      </button>
    </div>
  );
};
