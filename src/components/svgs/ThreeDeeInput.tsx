import { createEffect } from "solid-js";
import type { Component } from "solid-js";
import type { SVGProps } from "../../types/components";

import { threeDInputFade } from "../../animations/forms";

interface ThreeDeeInputProps extends SVGProps {
  initial: boolean;
  isTouched: boolean;
  isValid: boolean;
}

export const ThreeDeeInput: Component<ThreeDeeInputProps> = (props) => {
  let leftPath: SVGPathElement;
  let bottomPath: SVGPathElement;

  createEffect(() => {
    if (props.isTouched) {
      threeDInputFade(leftPath, "#099B9B");
      threeDInputFade(bottomPath, "#84FFFF");
    }

    if (!props.isTouched && props.initial) {
      threeDInputFade(leftPath, "#4e2a6f");
      threeDInputFade(bottomPath, "#bb71ff");
    }

    if (!props.isTouched && !props.initial && !props.isValid) {
      threeDInputFade(leftPath, "#E02132");
      threeDInputFade(bottomPath, "#E85E6A");
    }
  });

  return (
    <svg
      viewBox="0 0 1301 478"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path fill="none" d="M0 0h1300.54v477.043H0z" />
      <path
        d="m16.191 251.301 1107.47-80.324 21.85 195.728-1115.51 97.088-13.809-212.492Z"
        fill-opacity="0.4"
      />
      <path
        ref={leftPath!}
        d="m100.063 170.977 52.271-67.268 14.382 213.676-49.184 53.153-17.469-199.561Z"
        stroke="#000"
        stroke-width="15.42px"
      />
      <path
        ref={bottomPath!}
        d="m166.716 317.385 1114.94-96.627-55.973 57.979-1107.13 91.801 48.16-53.153Z"
        stroke="#000"
        stroke-width="15.42px"
      />
      <path
        d="m152.334 104.893 1107.47-80.324 21.85 195.728-1115.51 97.088-13.808-212.492Z"
        fill="#0c0d1b"
        stroke="#000"
        stroke-width="16.67px"
      />
      <path
        d="M291.996 183.196a7.117 7.117 0 0 0-7.65-6.539l-78.203 6.128a7.12 7.12 0 0 0-6.539 7.651l3.412 43.554a7.118 7.118 0 0 0 7.651 6.539l78.203-6.128a7.12 7.12 0 0 0 6.539-7.651l-3.413-43.554Z"
        fill="none"
        stroke="#f8f8f8"
        stroke-width="5.21px"
      />
      <path
        d="m200.3 199.317 48.183 21.743 44.209-28.983M234.92 215.887l-27.818 19.943M260.259 213.901l31.251 15.315"
        fill="none"
        stroke="#f8f8f8"
        stroke-width="5.21px"
      />
    </svg>
  );
};
