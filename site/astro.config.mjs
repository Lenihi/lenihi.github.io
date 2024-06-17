import { defineConfig } from "astro/config";
import remarkUnwrapImages from "remark-unwrap-images";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkUnwrapImages]
  },
  integrations: [mdx()]
});