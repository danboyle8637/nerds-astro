import { Component, createMemo, createSignal } from "solid-js";

import { checkIconOn } from "../../../animations/forms";
import type { SVGProps } from "../../../types/components";

interface CheckIconProps extends SVGProps {
  isTextInput: boolean;
  isTrackingCheck: boolean;
  isActive: boolean;
}

export const CheckIcon: Component<CheckIconProps> = (props) => {
  let checkRef: SVGPathElement;

  createMemo(() => {
    setTimeout(() => {
      if (props.isActive) {
        checkIconOn(checkRef);
      }
    });
  });

  return (
    <svg
      id="form-check"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 164.85 127.53"
    >
      <path
        style={{
          stroke: props.isTextInput
            ? "hsla(149, 83%, 48%, 1)"
            : "hsla(237, 100%, 96%, 1)",
          visibility: "hidden",
        }}
        ref={checkRef!}
        id="check"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="34"
        stroke-dashoffset="-1"
        stroke-dasharray="1"
        pathLength="1"
        d="M147.85 17l-93.52 93.53L17 73.2"
      />
    </svg>
  );
};
