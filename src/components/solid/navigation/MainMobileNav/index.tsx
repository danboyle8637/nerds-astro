import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { SmallNavItem } from "./SmallNavItem";
import { headerNavLinks } from "../../../../data/navigation";
import styles from "./MainMobileNav.module.css";

export const MainMobileNav: Component = () => {
  return <div class={styles.mobile_nav_container}></div>;
};
