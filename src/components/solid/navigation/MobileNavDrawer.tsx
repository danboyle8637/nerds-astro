import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { MainMobileNav } from "./MainMobileNav";
import {
  isMobileNavOpen,
  toggleIsMobileNavOpen,
} from "../../../stores/navigation";
import {
  showMobileNavMenu,
  hideMobileNavMenu,
} from "../../../animations/navigation";
import styles from "./MobileNavDrawer.module.css";

export const MobileNavDrawer: Component = () => {
  let clickLayerRef: HTMLDivElement;
  let menuDrawerRef: HTMLDivElement;

  createEffect(() => {
    if (isMobileNavOpen()) {
      showMobileNavMenu(clickLayerRef, menuDrawerRef);
    }
    if (!isMobileNavOpen()) {
      hideMobileNavMenu(clickLayerRef, menuDrawerRef);
    }
  });

  const handleClickLayerClick = () => {
    if (isMobileNavOpen()) {
      toggleIsMobileNavOpen();
    }
  };
  return (
    <div
      ref={clickLayerRef!}
      class={styles.drawer_click_layer}
      onClick={handleClickLayerClick}
    >
      <div ref={menuDrawerRef!} class={styles.drawer_container}>
        <MainMobileNav />
      </div>
    </div>
  );
};
