import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const config = {
  base: '/swapnilResume/',
  mode: "development",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  define: { "process.env.NODE_ENV": "'production'" },
  esbuild: { jsx: "automatic", jsxImportSource: "react" },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "./assets/*", dest: "assets" },
        {
          src: "./public/assets/{*,}",
          dest: path.join("dist", "public/assets"),
        },
        { src: "./assets/*", dest: path.join("dist", "assets") },
        // Copy PDF files
        { src: "./src/pdf/*.pdf", dest: "pdf" },
      ],
      silent: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.pdf'],
};
config.plugins.push(tsconfigPaths());
export default defineConfig(config);
