import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import dotenv from "dotenv";


// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [react(), commonjs(), envCompatible()],

  define: {
    "process.env": process.env, // This maps process.env for compatibility
  },
});
