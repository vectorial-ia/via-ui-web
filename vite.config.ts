import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "via-ui/styles.css": path.resolve(__dirname, "../dist/styles.css"),
      "via-ui": path.resolve(__dirname, "../src"),
    },
  },
});
