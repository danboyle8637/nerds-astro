import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), mdx()],
  // output: "server",
  // adapter: cloudflare({ mode: "directory" }),
});
