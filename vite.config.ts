import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@vectorial-ia/via-ui/styles.css": path.resolve(__dirname, "../dist/styles.css"),
      "@vectorial-ia/via-ui": path.resolve(__dirname, "../src"),
      "via-ui/styles.css": path.resolve(__dirname, "../dist/styles.css"),
      "via-ui": path.resolve(__dirname, "../src"),
    },
  },
});
