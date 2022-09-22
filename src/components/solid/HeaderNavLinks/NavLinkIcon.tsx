import type { Component, JSX } from "solid-js";

import type { NavType } from "../../../types/components";
import styles from "./NavLinkIcon.module.css";

interface NavLinkIconProps {
  navType: NavType;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  iconWidth: number;
  isHovering: boolean;
}

export const NavLinkIcon: Component<NavLinkIconProps> = (props) => {
  const imageStyles = {
    "--icon-width": `${props.iconWidth}px`,
  } as JSX.CSSProperties;

  return (
    <img
      style={imageStyles}
      class={styles.icon_container}
      src={props.imageUrl}
      alt={props.altTag}
      title={props.titleTag}
    />
  );
};
