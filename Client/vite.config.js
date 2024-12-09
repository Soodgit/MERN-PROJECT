import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // ✅ Remove /api from target
        changeOrigin: true,
        // Remove the rewrite rule unless specifically needed
      },
    },
  },
});
