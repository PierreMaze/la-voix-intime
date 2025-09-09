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
        manualChunks: {
          // Séparer React et ses dépendances
          "react-vendor": ["react", "react-dom"],
          // Séparer React Router
          router: ["react-router-dom"],
          // Séparer Framer Motion (composant lourd)
          "framer-motion": ["framer-motion"],
          // Séparer les icônes
          icons: ["react-icons"],
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
