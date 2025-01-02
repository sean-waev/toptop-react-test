import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), Pages()],
  base: '/',
  build: {
    outDir: 'dist', // Output directory for your built files
  },
});
// vite.config.js
