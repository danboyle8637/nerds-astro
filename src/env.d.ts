/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_BASE: string;
  readonly SANITY_TOKEN: string;
  readonly PUBLIC_DEV_ENDPOINT: string;
  readonly PUBLIC_ENDPOINT: string;
  readonly PUBLIC_AUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
