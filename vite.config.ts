import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ⬅️ makes "@/..." work
    },
  },
  // If deploying to custom domain use "/"
  // If deploying to GitHub Pages use "/<repo>/"
  base: "./", 
});
