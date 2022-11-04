import type { Component } from "solid-js";
import type { SVGProps } from "../../types/components";

export const ErrorIcon: Component<SVGProps> = (props) => {
  return (
    <svg
      viewBox="0 0 216 187"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path fill="none" d="M0 0h215.505v186.152H0z"></path>
      <path
        d="m20.594 60.385 52.155 30.978-14.717 5.247L5.411 64.554l15.183-4.169ZM34.715 25.607l15.982-5.067-30.103 39.845-15.183 3.747 29.304-38.525ZM130.625 6.155 114.5 12.08 94.24 44.894l9.783 5.144 26.602-43.883ZM58.134 96.61l14.615-4.104-33.669 54.019-15.82 3.049L58.134 96.61Z"
        fill="#860000"
        stroke="#000"
        stroke-width="6.67px"
      ></path>
      <path
        d="m39.08 146.994 49.026 29.474-15.357 3.707-49.489-30.601 15.82-2.58ZM123.657 121.04l52.523 38.602-12.784 3.943-46.385-33.031 6.646-9.514Z"
        fill="#860000"
        stroke="#000"
        stroke-width="6.67px"
      ></path>
      <path
        d="m39.092 146.022 34.259-53.541-52.757-32.323 30.395-38.885 52.849 28.516 26.815-42.828 54.898 29.33-30.647 44.672 53.502 27.392-32.497 50.436-52.674-37.577-35.456 54.551-48.687-29.743Z"
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
          gradientTransform="rotate(-55.342 183.24 21.386) scale(169.483)"
        >
          <stop offset="0" style="stop-color:#ff0b0b;stop-opacity:1"></stop>
          <stop offset=".53" style="stop-color:#ff2e2e;stop-opacity:1"></stop>
          <stop offset="1" style="stop-color:#ffa4a4;stop-opacity:1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
