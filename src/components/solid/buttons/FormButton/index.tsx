import { createSignal, createEffect, children } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import { MonthIcon } from "../../../svgs/MonthIcon";
import type { FormButtonTheme } from "../../../../types/components";
import styles from "./FormButton.module.css";

interface FormButtonProps {
  theme: FormButtonTheme;
  disabled: boolean;
  children: JSXElement;
}

export const FormButton: Component<FormButtonProps> = (props) => {
  const child = children(() => props.children);

  let buttonRef: HTMLButtonElement;

  const [isHovering, setIsHovering] = createSignal<boolean>(false);

  createEffect(() => {
    if (isHovering()) {
      buttonRef.classList.add(styles.form_button_active);
    }

    if (!isHovering()) {
      buttonRef.classList.remove(styles.form_button_active);
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
      >
        <div class={styles.button_icon}>
          <MonthIcon theme="dark" />
        </div>
        {child()}
      </button>
    </div>
  );
};
