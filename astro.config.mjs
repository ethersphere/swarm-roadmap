import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    relativeLinks(),
    alpinejs(),
  ],
});
