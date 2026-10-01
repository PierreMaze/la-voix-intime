import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      input: { main: "index.html", prototype: "prototype.html" },
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
  },
});
