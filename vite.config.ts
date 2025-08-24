import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// If you host at https://<user>.github.io/rishikanaujiya/ keep base below.
// If you use a custom domain (e.g. rishikanaujiya.online) change to base: "/".
export default defineConfig({
  base: "/rishikanaujiya/",
  server: { host: "::", port: 5173 },
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
