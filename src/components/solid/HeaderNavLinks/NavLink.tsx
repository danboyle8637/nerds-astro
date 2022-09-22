import { createSignal } from "solid-js";
import type { Component } from "solid-js";

import { NavLinkIcon } from "./NavLinkIcon";
import type { NavType } from "../../../types/components";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  navType: NavType;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  iconWidth: number;
  navLabel: string;
  slug: string;
}

export const NavLink: Component<NavLinkProps> = (props) => {
  const [isHovering, setIsHovering] = createSignal<boolean>(false);

  return (
    <li class={styles.item_container}>
      <NavLinkIcon
        navType={props.navType}
        imageUrl={props.imageUrl}
        altTag={props.altTag}
        titleTag={props.titleTag}
        iconWidth={props.iconWidth}
        isHovering={isHovering()}
      />
      <a class={styles.item_link} href={props.slug}>
        {props.navLabel}
      </a>
    </li>
  );
};
