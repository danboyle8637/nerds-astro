import { createMemo } from "solid-js";
import type { Component } from "solid-js";

import { inputActive } from "../../../animations/forms";
import type { SVGProps } from "../../../types/components";

interface CheckIconProps extends SVGProps {
  isActive: boolean;
}

export const ActiveIcon: Component<CheckIconProps> = (props) => {
  let outterCircleRef: SVGCircleElement;
  let middleCircleRef: SVGCircleElement;
  let innerCircleRef: SVGCircleElement;

  createMemo(() => {
    setTimeout(() => {
      if (
        props.isActive &&
        outterCircleRef &&
        middleCircleRef &&
        innerCircleRef
      ) {
        inputActive(outterCircleRef, middleCircleRef, innerCircleRef);
      }
    });
  });

  const startingStyles = {
    "transform-origin": "50% 50%",
    transform: "scale(1)",
    opacity: 1,
  };

  return (
    <svg
      viewBox="0 0 227 228"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path style="fill:none" d="M0 0h226.202v227.868H0z" />
      <circle
        ref={outterCircleRef!}
        id="outterCircle"
        cx="113.025"
        cy="114.376"
        r="98.216"
        fill="none"
        stroke="#ab6ce5"
        stroke-width="25px"
        style={startingStyles}
      />
      <circle
        ref={middleCircleRef!}
        cx="113.025"
        cy="114.376"
        r="56.707"
        fill="none"
        stroke="#ce99ff"
        stroke-width="25px"
        style={startingStyles}
      />
      <circle
        ref={innerCircleRef!}
        cx="113.025"
        cy="114.376"
        r="25.736"
        fill="#e9d2ff"
        style={startingStyles}
      />
    </svg>
  );
};
