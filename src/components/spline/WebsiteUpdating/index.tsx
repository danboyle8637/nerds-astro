import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { createVisibilityObserver } from "../../../solid/intersectionObserver";

export const WebsiteUpdating: Component = () => {
  let containerRef: HTMLDivElement;

  const useVisibilityObserver = createVisibilityObserver({
    shouldUnobserve: true,
  });
  const visible = useVisibilityObserver(() => containerRef);

  createEffect(() => {
    console.log(visible() ? "It's Here!" : "It's Not Here");
  });

  return <div ref={containerRef!}>Updater Here</div>;
};
