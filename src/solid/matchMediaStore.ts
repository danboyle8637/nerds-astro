import { createSignal, onMount, onCleanup } from "solid-js";

const [width, setWidth] = createSignal<number>(600);
export const [shouldShow, setShouldShow] = createSignal<boolean>(false);

export const setBreakPoint = (width: number) => {
  setWidth(width);
};

onMount(() => {
  if (window !== undefined) {
    const mediaQuery = window.matchMedia(`(min-width: ${width()}px)`);

    if (mediaQuery.matches) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }

    const testWidth = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setShouldShow(true);
      } else {
        setShouldShow(false);
      }
    };

    mediaQuery.addEventListener("change", testWidth);

    onCleanup(() => {
      console.log("Removing event listener");
      mediaQuery.removeEventListener("change", testWidth);
    });
  }
});
