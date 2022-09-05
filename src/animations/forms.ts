import { animate } from "motion";

export const checkIconOn = (path: SVGPathElement) => {
  const keyframes: Keyframe[] = [
    { visibility: "visible", strokeDashoffset: 0 },
  ];
  const options: KeyframeAnimationOptions = {
    fill: "forwards",
    duration: 300,
    easing: "linear",
  };

  path.animate(keyframes, options);
};

export const errorIconOn = (
  rightCross: SVGPathElement,
  leftCross: SVGPathElement
) => {
  const keyframes: Keyframe[] = [
    { visibility: "visible", strokeDashoffset: 0 },
  ];
  const leftOptions: KeyframeAnimationOptions = {
    fill: "forwards",
    duration: 300,
    easing: "linear",
  };
  const rightOptions: KeyframeAnimationOptions = {
    fill: "forwards",
    duration: 300,
    easing: "linear",
    delay: 260,
  };

  leftCross.animate(keyframes, leftOptions);
  rightCross.animate(keyframes, rightOptions);
};

export const inputActive = (
  outterCircle: SVGCircleElement,
  middleCircle: SVGCircleElement,
  innerCircle: SVGCircleElement
) => {
  animate(
    outterCircle,
    {
      transform: "scale(0.4)",
      opacity: 0.3,
    },
    {
      duration: 0.5,
      easing: "ease-in-out",
      repeat: Infinity,
      direction: "alternate-reverse",
      delay: 0.4,
    }
  );

  animate(
    middleCircle,
    {
      transform: "scale(0.4)",
      opacity: 0.3,
    },
    {
      duration: 0.5,
      easing: "ease-in-out",
      repeat: Infinity,
      direction: "alternate-reverse",
      delay: 0.25,
    }
  );

  animate(
    innerCircle,
    {
      transform: "scale(0.4)",
      opacity: 0.3,
    },
    {
      duration: 0.5,
      easing: "ease-in-out",
      repeat: Infinity,
      direction: "alternate-reverse",
      delay: 0,
    }
  );
};
