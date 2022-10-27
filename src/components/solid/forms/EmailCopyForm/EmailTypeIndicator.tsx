import type { Component } from "solid-js";

import { emails } from "../../../../stores/forms";
import styles from "./EmailTypeIndicator.module.css";

export const EmailTypeIndicator: Component = () => {
  return (
    <div class={styles.indicator_container}>
      <div
        class={
          emails().value > 1
            ? styles.type_container_active
            : styles.type_container
        }
      >
        <p
          class={
            emails().value > 1 ? styles.type_label_active : styles.type_label
          }
        >
          Automation
        </p>
      </div>
      <div
        class={
          emails().value === 1
            ? styles.type_container_active
            : styles.type_container
        }
      >
        <p
          class={
            emails().value === 1 ? styles.type_label_active : styles.type_label
          }
        >
          Broadcast
        </p>
      </div>
    </div>
  );
};
