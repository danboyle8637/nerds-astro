/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_BASE: string;
  readonly SANITY_TOKEN: string;
  readonly DEV_ENDPOINT: string;
  readonly ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
