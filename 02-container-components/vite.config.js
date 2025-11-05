import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // Requests starting with /api will be proxied
        target: "http://localhost:9090", // The backend server address
        changeOrigin: true, // Changes the origin header to match the target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrites the URL path by removing /api
      },
    },
  },
})
