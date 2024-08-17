import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/photography/",
  plugins: [react()],
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        noEmit: false,
        checkJs: false,
      },
    },
  },
});
