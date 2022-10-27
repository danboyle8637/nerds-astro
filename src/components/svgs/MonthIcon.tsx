import { createMemo } from "solid-js";
import type { Component, JSX } from "solid-js";

import type { SVGProps } from "../../types/components";

interface MonthIconProps extends SVGProps {
  theme: "light" | "dark";
}

export const MonthIcon: Component<MonthIconProps> = (props) => {
  const styles = createMemo(
    () =>
      ({
        "--calendar-body":
          props.theme === "dark"
            ? "var(--accent-teal-dark)"
            : "var(--font-color-light)",
        "--highlight-day":
          props.theme === "dark"
            ? "var(--accent-purple)"
            : "var(--accent-teal)",
        "--normal-day":
          props.theme === "dark"
            ? "var(--accent-teal-dark)"
            : "var(--font-color-light)",
      } as JSX.CSSProperties)
  );

  return (
    <svg
      viewBox="0 0 341 300"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      style={styles()}
    >
      <path style="fill:none" d="M0 0h340.411v299.374H0z" />
      <path
        d="M157.106 137.453h-41.548a2.996 2.996 0 0 1-2.996-2.996v-31.135a2.996 2.996 0 0 1 2.996-2.996h41.548a2.996 2.996 0 0 1 2.996 2.996v31.135a2.996 2.996 0 0 1-2.996 2.996M225.994 137.453h-41.548a2.996 2.996 0 0 1-2.996-2.996v-31.135a2.996 2.996 0 0 1 2.996-2.996h41.548a2.996 2.996 0 0 1 2.996 2.996v31.135a2.996 2.996 0 0 1-2.996 2.996M294.882 137.453h-41.548a2.996 2.996 0 0 1-2.996-2.996v-31.135a2.996 2.996 0 0 1 2.996-2.996h41.548a2.996 2.996 0 0 1 2.996 2.996v31.135a2.996 2.996 0 0 1-2.996 2.996M87.62 195.842H46.072a2.996 2.996 0 0 1-2.996-2.995V161.71a2.996 2.996 0 0 1 2.996-2.995H87.62a2.996 2.996 0 0 1 2.996 2.995v31.137a2.996 2.996 0 0 1-2.996 2.995M156.708 195.842H115.16a2.995 2.995 0 0 1-2.996-2.995V161.71a2.995 2.995 0 0 1 2.996-2.995h41.548a2.995 2.995 0 0 1 2.995 2.995v31.137a2.995 2.995 0 0 1-2.995 2.995"
        style="fill:var(--normal-day);fill-opacity:.6;fill-rule:nonzero"
      />
      <path
        d="M232.201 201.567H178.24a3.891 3.891 0 0 1-3.891-3.89v-40.439a3.891 3.891 0 0 1 3.891-3.89h53.961a3.89 3.89 0 0 1 3.891 3.89v40.439a3.89 3.89 0 0 1-3.891 3.89"
        style="fill:var(--highlight-day);fill-rule:nonzero"
      />
      <path
        d="M294.882 195.842h-41.548a2.996 2.996 0 0 1-2.996-2.995V161.71a2.996 2.996 0 0 1 2.996-2.995h41.548a2.995 2.995 0 0 1 2.996 2.995v31.137a2.995 2.995 0 0 1-2.996 2.995M87.62 254.588H46.072a2.996 2.996 0 0 1-2.996-2.996v-31.135a2.997 2.997 0 0 1 2.996-2.996H87.62a2.997 2.997 0 0 1 2.996 2.996v31.135a2.996 2.996 0 0 1-2.996 2.996M156.708 254.588H115.16a2.996 2.996 0 0 1-2.996-2.996v-31.135a2.996 2.996 0 0 1 2.996-2.996h41.548a2.996 2.996 0 0 1 2.995 2.996v31.135a2.995 2.995 0 0 1-2.995 2.996M225.795 254.588h-41.548a2.996 2.996 0 0 1-2.996-2.996v-31.135a2.997 2.997 0 0 1 2.996-2.996h41.548a2.997 2.997 0 0 1 2.996 2.996v31.135a2.996 2.996 0 0 1-2.996 2.996"
        style="fill:var(--normal-day);fill-opacity:.6;fill-rule:nonzero"
      />
      <path
        d="M337.494 62.182a58.355 58.355 0 0 0-58.359-58.359H61.82a58.355 58.355 0 0 0-41.266 17.093A58.356 58.356 0 0 0 3.46 62.182v175.079a58.356 58.356 0 0 0 17.094 41.266 58.356 58.356 0 0 0 41.266 17.094h217.315a58.36 58.36 0 0 0 58.359-58.36V62.182Zm-15.503 18.851a8.545 8.545 0 0 0-8.544-8.545H26.712a8.548 8.548 0 0 0-8.545 8.545v158.483c0 23.698 19.212 42.91 42.91 42.91h218.005c23.698 0 42.909-19.212 42.909-42.91V81.033ZM66.846 20.457c11.222 0 20.332 9.11 20.332 20.332 0 11.222-9.11 20.332-20.332 20.332-11.221 0-20.332-9.11-20.332-20.332 0-11.222 9.111-20.332 20.332-20.332Zm207.262 0c11.222 0 20.332 9.11 20.332 20.332 0 11.222-9.11 20.332-20.332 20.332-11.221 0-20.332-9.11-20.332-20.332 0-11.222 9.111-20.332 20.332-20.332Z"
        style="fill:var(--calendar-body)"
      />
    </svg>
  );
};
