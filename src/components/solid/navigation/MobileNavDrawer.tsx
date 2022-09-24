import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { isMobileNavOpen } from "../../../stores/navigation";
import {
  showMobileNavMenu,
  hideMobileNavMenu,
} from "../../../animations/navigation";
import styles from "./MobileNavDrawer.module.css";

export const MobileNavDrawer: Component = () => {
  let menuDrawer: HTMLDivElement;

  createEffect(() => {
    if (isMobileNavOpen()) {
      showMobileNavMenu(menuDrawer);
    }

    if (!isMobileNavOpen()) {
      hideMobileNavMenu(menuDrawer);
    }
  });

  return <div ref={menuDrawer!} class={styles.drawer_container} />;
};
