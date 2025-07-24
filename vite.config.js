import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/-Raj_-/", // <-- repo name EXACT yaha daal
  plugins: [react()],
});
