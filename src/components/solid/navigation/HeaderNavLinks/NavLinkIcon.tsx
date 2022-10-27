import { Component, createEffect, JSX } from "solid-js";

import {
  headerNavIconEnter,
  headerNavIconExit,
} from "../../../../animations/components";
import type { NavType } from "../../../../types/components";
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
  let iconRef: HTMLImageElement;

  createEffect(() => {
    if (props.isHovering) {
      headerNavIconEnter(iconRef);
    }

    if (!props.isHovering) {
      headerNavIconExit(iconRef);
    }
  });

  const imageStyles = {
    "--icon-width": `${props.iconWidth}px`,
  } as JSX.CSSProperties;

  return (
    <img
      ref={iconRef!}
      style={imageStyles}
      class={styles.icon_container}
      src={props.imageUrl}
      alt={props.altTag}
      title={props.titleTag}
    />
  );
};
