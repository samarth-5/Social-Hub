import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_BACKEND_URL, // Use process.env instead
        changeOrigin: true,
      },
    },
  },
});
