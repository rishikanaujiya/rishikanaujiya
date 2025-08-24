import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Vite config for custom domain (rishikanaujiya.online)
export default defineConfig({
  base: "./", // ensures assets load correctly on GitHub Pages / custom domain
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
