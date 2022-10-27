import { onMount } from "solid-js";
import type { Component } from "solid-js";

import { firstName, emailAddress } from "../../../stores/leadFormStore";

export const CalendlyEmbed: Component = () => {
  onMount(() => {
    setTimeout(() => {
      // @ts-ignore
      Calendly.initInlineWidget({
        url: "https://calendly.com/nerd-chat/40min",
        parentElement: document.getElementById("calendly-embed"),
        prefill: {
          firstName: firstName().value || "",
          email: emailAddress().value || "",
        },
        utm: {},
      });
    }, 300);
  });

  return (
    <div
      id="calendly-embed"
      style="min-width:100%;height:800px;"
      data-auto-load="false"
    ></div>
  );
};
