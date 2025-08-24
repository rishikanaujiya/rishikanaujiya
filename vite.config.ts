import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ For custom domain (rishikanaujiya.online), base must be "/"
export default defineConfig({
  base: "/", 
  server: { host: "::", port: 5173 },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
