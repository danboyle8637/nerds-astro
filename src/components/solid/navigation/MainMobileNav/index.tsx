import type { Component } from "solid-js";

import { SmallNavItem } from "./SmallNavItem";
import { headerNavLinks } from "../../../../data/navigation";
import styles from "./MainMobileNav.module.css";

export const MainMobileNav: Component = () => {
  const navItems = headerNavLinks.map((link) => {
    const {
      id,
      navType,
      imageUrl,
      altTag,
      titleTag,
      iconWidth,
      navLabel,
      slug,
    } = link;

    return (
      <SmallNavItem
        id={id}
        navType={navType}
        imageUrl={imageUrl}
        altTag={altTag}
        titleTag={titleTag}
        iconWidth={iconWidth}
        navLabel={navLabel}
        slug={slug}
      />
    );
  });

  return <div class={styles.mobile_nav_container}>{navItems}</div>;
};
