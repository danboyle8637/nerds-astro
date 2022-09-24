import { createSignal } from "solid-js";

export const [isMobileNavOpen, setIsMobileNavOpen] =
  createSignal<boolean>(false);

export const toggleIsMobileNavOpen = () => {
  setIsMobileNavOpen((prevValue) => !prevValue);
};

export const closeMobileNavOpen = () => {
  setIsMobileNavOpen(false);
};
