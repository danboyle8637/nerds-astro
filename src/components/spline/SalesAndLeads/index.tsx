import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { createVisibilityObserver } from "../../../solid/intersectionObserver";
import { notificationPop } from "../../../animations/components";
import styles from "./SalesAndLeads.module.css";

export const SalesAndLeads: Component = () => {
  let notification1: HTMLImageElement;
  let notification2: HTMLImageElement;
  let notification3: HTMLImageElement;
  let notification4: HTMLImageElement;

  const salesNotification =
    "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/new-sale-notification_BDbBF6gXw.png?ik-sdk-version=javascript-1.4.3";

  const leadNotification =
    "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/new-lead-notification_Kq9EM5v_Q.png?ik-sdk-version=javascript-1.4.3";

  const useVisibilityObserver = createVisibilityObserver({
    rootMargin: "0% 0% -20% 0%",
    shouldUnobserve: true,
  });
  const pop1 = useVisibilityObserver(() => notification1);
  const pop2 = useVisibilityObserver(() => notification2);
  const pop3 = useVisibilityObserver(() => notification3);
  const pop4 = useVisibilityObserver(() => notification4);

  createEffect(() => {
    if (pop1()) {
      notificationPop(notification1);
    }

    if (pop2()) {
      notificationPop(notification2);
    }

    if (pop3()) {
      notificationPop(notification3);
    }

    if (pop4()) {
      notificationPop(notification4);
    }
  });

  return (
    <div class={styles.container}>
      <img
        ref={notification1!}
        class={styles.sale}
        src={salesNotification}
        alt=""
      />
      <img
        ref={notification2!}
        class={styles.lead}
        src={leadNotification}
        alt=""
      />
      <img
        ref={notification3!}
        class={styles.sale}
        src={salesNotification}
        alt=""
      />
      <img
        ref={notification4!}
        class={styles.lead}
        src={leadNotification}
        alt=""
      />
    </div>
  );
};
