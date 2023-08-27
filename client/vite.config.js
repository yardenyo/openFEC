import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    extensions: [".js", ".ts", ".json", ".vue", ".scss", ".css"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math"; @import "@/assets/scss/variables.scss";`,
      },
    },
  },
});
