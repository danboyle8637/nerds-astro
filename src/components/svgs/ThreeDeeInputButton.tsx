import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { threeDInputFade } from "../../animations/forms";
import type { SVGProps } from "../../types/components";

interface ButtonProps extends SVGProps {
  isValid: boolean;
}

export const ThreeDeeInputButton: Component<ButtonProps> = (props) => {
  let leftPath: SVGPathElement;
  let bottomPath: SVGPathElement;
  let frontPath: SVGPathElement;

  createEffect(() => {
    if (props.isValid) {
      threeDInputFade(leftPath, "#099b9b");
      threeDInputFade(bottomPath, "#84ffff");
      threeDInputFade(frontPath, "#14ffff");
    }
  });

  return (
    <svg
      viewBox="0 0 926 365"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path fill="none" d="M0 0h925.125v364.752H0z" />
      <path
        d="m15.558 139.118 847.15-54.883 26.533 191.413L29.367 351.61 15.558 139.118Z"
        fill-opacity="0.4"
      />
      <path
        ref={leftPath!}
        d="m42.642 120.198 25.904-46.249 14.382 213.676L56.1 314.53 42.642 120.198Z"
        fill="#151F2D"
        stroke="#000"
        stroke-width="15.42px"
      />
      <path
        ref={bottomPath!}
        d="m82.928 287.625 818.35-69.703-22.338 26.52L57.085 314.53l25.843-26.905Z"
        fill="#364A69"
        stroke="#000"
        stroke-width="15.42px"
      />
      <path
        ref={frontPath!}
        d="M68.546 75.133 878.05 23.162l23.228 194.76-818.924 69.703L68.546 75.133Z"
        fill="#364A69"
        stroke="#000"
        stroke-width="16.67px"
      />
      <text
        x="115.971"
        y="219.647"
        style="font-family:'AvenirNext-Bold','Avenir Next',sans-serif;font-weight:700;font-size:71.128px"
        transform="rotate(-3.773 -261.33 -63.95)"
      >
        {props.isValid ? "SEND ME THE LINKS" : "ENTER EMAIL..."}
      </text>
    </svg>
  );
};
