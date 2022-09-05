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
