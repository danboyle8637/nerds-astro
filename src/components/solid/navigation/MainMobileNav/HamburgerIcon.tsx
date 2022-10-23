import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import {
  isMobileNavOpen,
  toggleIsMobileNavOpen,
} from "../../../../stores/navigation";
import {
  mobileNavClosed,
  mobileNavOpen,
} from "../../../../animations/navigation";
import styled from "./HamburgerIcon.module.css";

export const HamburgerIcon: Component = () => {
  let buttonRef: HTMLButtonElement;
  let topBarRef: HTMLImageElement;
  let middleBarRef: HTMLImageElement;
  let bottomBarRef: HTMLImageElement;

  const topBar =
    "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/top-nav-bar_A2qvqjAJg.png?ik-sdk-version=javascript-1.4.3";

  const middleBar =
    "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/middle-nav-bar_B9ahbRYGw.png?ik-sdk-version=javascript-1.4.3";

  const bottomBar =
    "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/bottom-nav-bar_Uw8KdS3YK.png?ik-sdk-version=javascript-1.4.3";

  createEffect(() => {
    if (isMobileNavOpen()) {
      mobileNavOpen(buttonRef, topBarRef, middleBarRef, bottomBarRef);
    }

    if (!isMobileNavOpen()) {
      mobileNavClosed(buttonRef, bottomBarRef, middleBarRef, topBarRef);
    }
  });

  return (
    <button
      ref={buttonRef!}
      type="button"
      aria-label="Main Menu Icon"
      class={styled.burger_container}
      title="Main Menu"
      onClick={toggleIsMobileNavOpen}
    >
      <img
        class={styled.nav_bar}
        ref={topBarRef!}
        src={topBar}
        alt="Top menu bar"
      />
      <img
        class={styled.nav_bar}
        ref={middleBarRef!}
        src={middleBar}
        alt="Middle menu bar"
      />
      <img
        class={styled.nav_bar}
        ref={bottomBarRef!}
        src={bottomBar}
        alt="Bottom menu bar"
      />
    </button>
  );
};
