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
    // Optimisations de performance
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        // Code splitting optimisé
        manualChunks: (id) => {
          // Séparer React et ses dépendances
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }
          // Séparer React Router
          if (id.includes("react-router")) {
            return "router";
          }
          // Séparer Framer Motion (composant lourd)
          if (id.includes("framer-motion")) {
            return "framer-motion";
          }
          // Séparer les icônes
          if (id.includes("react-icons")) {
            return "icons";
          }
          // Séparer les composants UI
          if (id.includes("/components/ui/")) {
            return "ui-components";
          }
          // Séparer les pages
          if (id.includes("/pages/")) {
            return "pages";
          }
          // Séparer les composants features
          if (id.includes("/components/features/")) {
            return "features";
          }
        },
        // Optimisation des chunks
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",
      },
    },
    // Optimisation des assets
    assetsInlineLimit: 4096, // Inline les petits assets (< 4KB)
    sourcemap: false, // Désactiver les sourcemaps en production pour réduire la taille
  },
  // Optimisation du serveur de développement
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "react-icons",
    ],
  },
});
