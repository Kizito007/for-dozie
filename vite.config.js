import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
  },
  css: { preprocessorOptions: { css: { charset: false } } },
  plugins: [react()],
});
