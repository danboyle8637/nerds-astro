import { createSignal, createEffect, children } from "solid-js";
import type { Component, JSXElement } from "solid-js";

import { PiggyBankIcon } from "../../../svgs/PiggyBankIcon";
import type { AccentColor } from "../../../../types/styles";
import styles from "./ExternalButton.module.css";

interface FormButtonProps {
  theme: AccentColor;
  url: string;
  children: JSXElement;
}

export const ExternalButton: Component<FormButtonProps> = (props) => {
  const child = children(() => props.children);
  let buttonRef: HTMLAnchorElement;

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

  const toggleButtonHover = () => {
    setIsHovering((prevValue) => !prevValue);
  };

  return (
    <div class={styles.button_container}>
      <a
        ref={buttonRef!}
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
        class={
          props.theme === "teal"
            ? styles.button_teal
            : props.theme === "purple"
            ? styles.button_purple
            : styles.button_pink
        }
        onMouseOver={toggleButtonHover}
        onMouseLeave={toggleButtonHover}
      >
        <div class={styles.button_icon}>
          <PiggyBankIcon />
        </div>
        {child()}
      </a>
    </div>
  );
};
