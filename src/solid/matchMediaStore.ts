import { createSignal, onCleanup, createMemo } from "solid-js";
import { isServer } from "solid-js/web";

const [width, setWidth] = createSignal<number>(600);
export const [shouldShow, setShouldShow] = createSignal<boolean>(false);

export const setBreakPoint = (width: number) => {
  // TODO - This might cause problems with multiple listeners on the same page.
  mediaQuery()!.removeEventListener("change", testWindowWidth()!);
  setWidth(width);
};

const mediaQuery = createMemo(() => {
  if (!isServer) {
    return window.matchMedia(`(min-width: ${width()}px)`);
  }
});

const testWindowWidth = createMemo(() => {
  if (!isServer) {
    return (event: MediaQueryListEvent) => {
      if (event.matches) {
        setShouldShow(true);
      } else {
        setShouldShow(false);
      }
    };
  }
});

createMemo(() => {
  if (!isServer) {
    if (mediaQuery()!.matches) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }

    mediaQuery()!.addEventListener("change", testWindowWidth()!);
  }
});

onCleanup(() => {
  console.log("Removing event listener");
  mediaQuery()!.removeEventListener("change", testWindowWidth()!);
});
