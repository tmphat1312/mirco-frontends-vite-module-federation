import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "related_products",
      filename: "remoteEntry.js",
      exposes: {
        "./RelatedProducts": "./src/RelatedProducts",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    target: "esnext",
  },
});
