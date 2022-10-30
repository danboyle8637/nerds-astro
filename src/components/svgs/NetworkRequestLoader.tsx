import { createEffect } from "solid-js";
import type { Component } from "solid-js";
import type { SVGProps } from "../../types/components";

export const NetworkRequestLoader: Component<SVGProps> = (props) => {
  return (
    <svg
      viewBox="0 0 337 243"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path d="M0 0h336.145v242.761H0z" fill="none" />
      <path
        d="M34.344 238.491 4.341 113.194l225.279-31.3 29.366 123.91-224.642 32.687Z"
        fill-opacity="0.4"
      />
      <path
        d="m44.802 76.35 6.258-16.363 29.765 125.728-6.583 10.557L44.802 76.35ZM80.825 185.715l225.277-32.55-9.34 11.121-222.295 31.986 6.358-10.557Z"
        fill="#1d1d1d"
        stroke="#000"
        stroke-width="3.33px"
      />
      <path
        d="M81.062 185.715 51.06 60.418l225.278-31.3 29.366 123.909-224.642 32.688Z"
        fill="url(#screen-gradient)"
      />
      <clipPath id="b">
        <path d="M81.062 185.715 51.06 60.418l225.278-31.3 29.366 123.909-224.642 32.688Z" />
      </clipPath>
      <g clip-path="url(#b)">
        <path
          d="m68.58 73.605 48.334-6.882"
          fill="none"
          stroke="#cf00ff"
          stroke-width="8.33px"
        />
        <path
          d="m90.279 86.626 41.866-5.962"
          fill="none"
          stroke="#00f4ff"
          stroke-width="8.33px"
        />
        <path
          d="m112.665 97.303 74.988-10.677M116.914 110.508l50.833-7.238"
          fill="none"
          stroke="#7f00ff"
          stroke-width="8.33px"
        />
        <path
          d="m102.518 129.233 27.877-3.97"
          fill="none"
          stroke="#00f4ff"
          stroke-width="8.33px"
        />
        <path
          d="m88.499 148.448 48.333-6.882"
          fill="none"
          stroke="#cf00ff"
          stroke-width="8.33px"
        />
        <path
          d="m114.453 164.751 72.589-10.335"
          fill="none"
          stroke="#00f4ff"
          stroke-width="8.33px"
        />
        <path
          d="M201.226 200.725 163.437 34.819l104.089-14.527 38.576 166.675-104.876 13.758Z"
          fill-opacity="0.4"
        />
      </g>
      <path
        d="M81.062 185.715 51.06 60.418l225.278-31.3 29.366 123.909-224.642 32.688Z"
        fill="none"
        stroke="#000"
        stroke-width="4.17px"
      />
      <path
        d="m225.443 185.715-37.79-165.906 104.09-14.527 38.576 166.675-104.876 13.758Z"
        fill-opacity="0.4"
        stroke="#000"
        stroke-width="4.17px"
      />
      <path
        d="m203.682 32.559 48.334-6.882M206.43 43.487l37.127-5.286M209.285 54.416l42.731-6.085"
        fill="none"
        stroke="#00ff58"
        stroke-width="4.17px"
      />
      <text
        x="210.495"
        y="98.489"
        font-family="inherit"
        font-weight={700}
        font-size="10.46px"
        fill="#00ff58"
        transform="rotate(-8.419 165.054 112.257) skewX(4.746)"
      >
        LOADING
      </text>
      <circle cx="267.662" cy="81.894" r="1.229" fill="#00ff58" />
      <circle cx="271.764" cy="81.405" r="1.229" fill="#00ff58" />
      <circle cx="275.866" cy="80.664" r="1.229" fill="#00ff58" />
      <defs>
        <linearGradient
          id="screen-gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-238.051) rotate(-38.292 -.793 1.54)"
        >
          <stop offset="0" stop-color="#110d2c" stop-opacity="1" />
          <stop offset=".62" stop-color="#110d2c" stop-opacity="1" />
          <stop offset=".82" stop-color="#110d2c" stop-opacity="1" />
          <stop offset="1" stop-color="#110d2c" stop-opacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
