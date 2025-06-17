import { defineConfig } from "astro/config";
import metaTags from "astro-meta-tags";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://nirmitjoshi.tech",
  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
      defaultColor: false,
      langs: [],
      wrap: false,
      transformers: []
    }
  },
  integrations: [metaTags(), mdx()],
	experimental: {
    responsiveImages: true,
  },
});
