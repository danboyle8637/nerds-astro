import type { Component } from "solid-js";

import type { NavType } from "../../../../types/components";
import styles from "./SmallNavItem.module.css";

interface SmallNavItemProps {
  id: number;
  navType: NavType;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  iconWidth: number;
  navLabel: string;
  slug: string;
}

export const SmallNavItem: Component<SmallNavItemProps> = (props) => {
  const handleNavigationClick = () => {
    if (window) {
      window.location.href = props.slug;
    }
  };

  return (
    <li>
      <button
        class={styles.item_container}
        title={props.navLabel}
        onClick={handleNavigationClick}
      >
        <img
          class={styles.item_icon}
          src={props.imageUrl}
          alt={props.altTag}
          title={props.titleTag}
        />
        <p class={styles.item_label}>{props.navLabel}</p>
      </button>
    </li>
  );
};
