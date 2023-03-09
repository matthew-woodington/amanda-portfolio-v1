import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/amanda-portfolio-v1/",
  plugins: [react()],
});
