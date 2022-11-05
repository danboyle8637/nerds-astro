import type { Component } from "solid-js";
import type { SVGProps } from "../../types/components";

export const CloseIcon: Component<SVGProps> = (props) => {
  return (
    <svg
      viewBox="0 0 218 218"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path fill="none" d="M0 0h217.232v217.818H0z" />
      <path
        d="m27.32 27.61 162.56 162.559M27.32 190.169 189.88 27.61"
        fill="none"
        stroke="#f8f8f8"
        stroke-width="50px"
      />
    </svg>
  );
};
