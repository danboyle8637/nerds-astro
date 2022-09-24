import type { Component } from "solid-js";

import { NavItem } from "./NavItem";
import { headerNavLinks } from "../../../../data/navigation";
import styles from "./HeaderNavLinks.module.css";

export const HeaderNavLinks: Component = () => {
  const links = headerNavLinks.map((link) => {
    const { navType, imageUrl, altTag, titleTag, iconWidth, navLabel, slug } =
      link;

    return (
      <NavItem
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

  return <ul class={styles.link_container}>{links}</ul>;
};
