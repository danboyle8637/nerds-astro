import { createSignal, onCleanup } from "solid-js";

const [shouldShow, setShouldShow] = createSignal<boolean>(false);

const updateShowOnWidthChange = (width: number) => {
  const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);

  if (window) {
    const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);

    if (mediaQuery.matches) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }
  }

  const testWidth = (event: MediaQueryListEvent) => {
    if (event.matches) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }
  };

  mediaQuery.addEventListener("change", testWidth);

  onCleanup(() => mediaQuery.removeEventListener("change", testWidth));
};
