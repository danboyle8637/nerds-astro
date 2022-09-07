import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import styles from "./OptionalTag.module.css";

interface OptionalTagProps {
  showTag: boolean;
  isTextArea?: boolean;
}

export const OptionalTag: Component<OptionalTagProps> = (props) => {
  let tagRef: HTMLDivElement;

  createEffect(() => {
    const noShowTag = tagRef.classList.contains(styles.show_tag);

    if (props.showTag && !noShowTag) {
      tagRef.classList.add(styles.show_tag);
    }

    if (!props.showTag && noShowTag) {
      tagRef.classList.remove(styles.show_tag);
    }
  });

  return (
    <div
      ref={tagRef!}
      class={
        props.isTextArea ? styles.tag_container_textarea : styles.tag_container
      }
    >
      <p class={styles.tag_label}>Optional</p>
    </div>
  );
};
