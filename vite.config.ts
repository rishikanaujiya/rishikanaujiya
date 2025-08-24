import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger";

export default defineConfig(() => ({
  base: "/", // <-- Add this line
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [
    react(),
    // componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
