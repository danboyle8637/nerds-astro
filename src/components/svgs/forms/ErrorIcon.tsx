import { createMemo } from "solid-js";
import type { Component } from "solid-js";

import { errorIconOn } from "../../../animations/forms";
import type { SVGProps } from "../../../types/components";

interface ErrorIconProps extends SVGProps {
  isActive: boolean;
}

export const ErrorIcon: Component<ErrorIconProps> = (props) => {
  let rightCrossRef: SVGPathElement;
  let leftCrossRef: SVGPathElement;

  createMemo(() => {
    setTimeout(() => {
      if (rightCrossRef && leftCrossRef) {
        errorIconOn(rightCrossRef, leftCrossRef);
      }
    });
  });

  return (
    <svg
      id="form-error-icon"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129.51 129.51"
    >
      <path
        ref={rightCrossRef!}
        style={{
          stroke: "var(--error-stroke, #D31313)",
          visibility: "hidden",
        }}
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="34"
        stroke-dasharray="1"
        stroke-dashoffset="-1"
        pathLength="1"
        d="M17 112.51L112.51 17"
        id="right-cross"
      />
      <path
        ref={leftCrossRef!}
        style={{
          stroke: "var(--error-stroke, #D31313)",
          visibility: "hidden",
        }}
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-dasharray="1"
        stroke-dashoffset="-1"
        stroke-width="34"
        pathLength="1"
        d="M112.51 112.51L17 17"
        id="left-cross"
      />
    </svg>
  );
};
