import type { Component } from "solid-js";

import type { SVGProps } from "../../types/components";

export const SuccessIcon: Component<SVGProps> = (props) => {
  return (
    <svg
      viewBox="0 0 234 231"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path fill="none" d="M0 0h233.773v230.446H0z"></path>
      <path
        d="m7.025 160.759 99.862 62.778 16.481-7.849-101.531-63.847-14.812 8.918Z"
        fill="#0a5a23"
        stroke="#000"
        stroke-width="6.67px"
      ></path>
      <path
        d="M31.257 110.009 51.1 91.795l-29.263 60.046-14.852 9.123 24.272-50.955ZM164.563 5.986l-19.787 11.103L99.66 122.528l10.685 6.189L164.563 5.986Z"
        fill="#0a5a23"
        stroke="#000"
        stroke-width="6.67px"
      ></path>
      <path
        d="m21.835 151.854 29.7-59.311 58.537 35.76L164.598 6.864l61.811 36.178-103.057 171.767-101.517-62.955Z"
        fill="url(#a)"
        stroke="#000"
        stroke-width="8.33px"
      ></path>
      <defs>
        <linearGradient
          id="a"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-203.913) rotate(-40.095 -.839 1.378)"
        >
          <stop offset="0" style="stop-color:#ceffdd;stop-opacity:1"></stop>
          <stop offset=".44" style="stop-color:#2afd6c;stop-opacity:1"></stop>
          <stop offset="1" style="stop-color:#00fd4f;stop-opacity:1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
