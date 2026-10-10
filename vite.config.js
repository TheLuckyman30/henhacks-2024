import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@css": path.resolve(import.meta.dirname, "./src/css"),
      "@components": path.resolve(
        import.meta.dirname,
        "./src/components/index.ts",
      ),
      "@utils": path.resolve(import.meta.dirname, "./src/utils"),
    },
  },
  base: "/henhacks-2024/",
});
