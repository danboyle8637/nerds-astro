import { animate, timeline, MotionKeyframesDefinition, spring } from "motion";

const draw = (progress: number): MotionKeyframesDefinition => {
  return {
    strokeDashoffset: 1 - progress * -1,
    visibility: "visible",
  };
};

export const notificationPop = (notification: HTMLImageElement) => {
  animate(
    notification,
    {
      transform: "scale(1)",
      opacity: 1,
    },
    {
      duration: 0.4,
      easing: [0.29, 1.51, 0.54, 1.02],
    }
  );
};

export const headerNavIconEnter = (icon: HTMLImageElement) => {
  animate(
    icon,
    { x: 0, opacity: 1, scale: 1 },
    { duration: 0.2, easing: "ease-in-out" }
  );
};

export const headerNavIconExit = (icon: HTMLImageElement) => {
  animate(
    icon,
    { x: "-60%", opacity: 0, scale: 0.9 },
    {
      duration: 0.2,
      easing: "ease-in-out",
    }
  );
};

export const loadingAnimation = (
  codeLine1: SVGPathElement,
  codeLine2: SVGPathElement,
  codeLine3: SVGPathElement,
  codeLine4: SVGPathElement,
  codeLine5: SVGPathElement,
  codeLine6: SVGPathElement,
  dot1: SVGCircleElement,
  dot2: SVGCircleElement,
  dot3: SVGCircleElement
) => {
  const codeSequence: any = [
    [codeLine1, draw(-1), { duration: 0.4, easing: "linear" }],
    [codeLine2, draw(-1), { duration: 0.4, easing: "linear" }],
    [codeLine3, draw(-1), { duration: 0.4, easing: "linear" }],
    [codeLine4, draw(-1), { duration: 0.4, easing: "linear" }],
    [codeLine5, draw(-1), { duration: 0.4, easing: "linear" }],
    [codeLine6, draw(-1), { duration: 0.4, easing: "linear" }],
  ];

  const dotSequence: any = [
    [dot1, { opacity: 1 }, { at: "-0.2", easing: "linear" }],
    [dot2, { opacity: 1 }, { at: "-0.2", easing: "linear" }],
    [dot3, { opacity: 1 }, { at: "-0.2", easing: "linear" }],
  ];

  timeline(codeSequence, {
    repeat: Infinity,
  });
  timeline(dotSequence, { duration: 1, repeat: Infinity });
};

// This is the status chip used for forms
export const openStatusChip = (chip: HTMLDivElement) => {
  animate(
    chip,
    { y: -80, opacity: 1 },
    { duration: 0.4, easing: spring(), delay: 0.4 }
  );
};

export const closeStatusChip = (chip: HTMLDivElement) => {
  animate(chip, { y: 60, opacity: 0 }, { duration: 0.4, easing: spring() });
};
