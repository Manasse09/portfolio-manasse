import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. Remplace par ton pseudo GitHub
  site: "https://manasse09.github.io",

  // 2. À configurer selon le nom de ton dépôt GitHub :
  // - Si ton dépôt s'appelle "portfolio" -> met : base: "/portfolio",
  // - Si ton dépôt s'appelle "<ton-pseudo>.github.io" -> efface simplement cette ligne "base"
  base: "portfolio-manasse",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});