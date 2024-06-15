import { defineConfig } from "astro/config";
import remarkUnwrapImages from "remark-unwrap-images";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkUnwrapImages],
  },
});
