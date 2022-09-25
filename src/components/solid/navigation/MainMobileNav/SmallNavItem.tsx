import type { Component, JSX } from "solid-js";

import { closeMobileNavOpen } from "../../../../stores/navigation";
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
    closeMobileNavOpen();
    if (window) {
      window.location.href = props.slug;
    }
  };

  const iconStyles = {
    "--icon-width": `${props.iconWidth}px`,
  } as JSX.CSSProperties;

  return (
    <li>
      <button
        class={styles.item_container}
        title={props.navLabel}
        onClick={handleNavigationClick}
      >
        <img
          class={styles.item_icon}
          style={iconStyles}
          src={props.imageUrl}
          alt={props.altTag}
          title={props.titleTag}
        />
        <p class={styles.item_label}>{props.navLabel}</p>
      </button>
    </li>
  );
};
