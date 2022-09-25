import { animate, spring, timeline } from "motion";

export const mobileNavClickLayer = (layer: HTMLDivElement) => {
  animate(layer, { opacity: 1 }, { duration: 0 });
};

export const mobileNavOpen = (
  button: HTMLButtonElement,
  topBar: HTMLImageElement,
  middleBar: HTMLImageElement,
  bottomBar: HTMLImageElement
) => {
  const sequence: any = [
    [topBar, { x: [0, -80], opacity: 0 }, { at: "-0.2" }],
    [middleBar, { x: [0, -60], opacity: 0 }, { at: "-0.2" }],
    [bottomBar, { x: [0, -40], opacity: 0 }, { at: "-0.2" }],
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
    [button, { opacity: 1 }],
    [bottomBar, { x: [-80, 0], opacity: 1 }, { at: "-0.2" }],
    [middleBar, { x: [-60, 0], opacity: 1 }, { at: "-0.2" }],
    [topBar, { x: [-40, 0], opacity: 1 }, { at: "-0.2" }],
  ];

  timeline(sequence, {
    duration: 0.4,
  });
};

export const showMobileNavMenu = (
  clickLayer: HTMLDivElement,
  drawer: HTMLDivElement
) => {
  const sequence: any = [
    [clickLayer, { x: ["106%", 0] }],
    [drawer, { x: ["106%", 0] }, { easing: spring(), at: "-0.1" }],
  ];

  timeline(sequence, { duration: 0.4 });
};

export const hideMobileNavMenu = (
  clickLayer: HTMLDivElement,
  drawer: HTMLDivElement
) => {
  const sequence: any = [
    [drawer, { x: [0, "106%"] }, { easing: spring() }],
    [clickLayer, { x: [0, "106%"] }, { at: "-0.1" }],
  ];

  timeline(sequence, { duration: 0.4 });
};
