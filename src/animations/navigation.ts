import { animate, spring, timeline } from "motion";

export const mobileNavOpen = (
  button: HTMLButtonElement,
  topBar: HTMLImageElement,
  middleBar: HTMLImageElement,
  bottomBar: HTMLImageElement
) => {
  const sequence: any = [
    [topBar, { x: -80, opacity: 0 }, { at: "-0.2" }],
    [middleBar, { x: -60, opacity: 0 }, { at: "-0.2" }],
    [bottomBar, { x: -40, opacity: 0 }, { at: "-0.2" }],
    [button, { opacity: 0 }],
  ];

  timeline(sequence, {
    duration: 0.4,
  });
};

export const mobileNavClosed = (
  button: HTMLButtonElement,
  bottomBar: HTMLImageElement,
  middleBar: HTMLImageElement,
  topBar: HTMLImageElement
) => {
  const sequence: any = [
    [bottomBar, { x: 0, opacity: 1 }, { at: "-0.2" }],
    [middleBar, { x: 0, opacity: 1 }, { at: "-0.2" }],
    [topBar, { x: 0, opacity: 1 }, { at: "-0.2" }],
    [button, { opacity: 1 }],
  ];

  timeline(sequence, {
    duration: 0.4,
  });
};

export const showMobileNavMenu = (drawer: HTMLDivElement) => {
  animate(drawer, { x: 0 }, { duration: 0.3, easing: spring() });
};

export const hideMobileNavMenu = (drawer: HTMLDivElement) => {
  animate(drawer, { x: "106%" }, { duration: 0.3, easing: spring() });
};
