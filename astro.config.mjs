import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import cloudflare from '@astrojs/cloudflare';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://thepope.dev",
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), icon(), react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    resolve: {
      // https://github.com/withastro/astro/issues/12824
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge"
      }
    }
  }
});
