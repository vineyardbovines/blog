import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: "https://vineyardbovines.com",
    integrations: [tailwind(), icon()],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
});
