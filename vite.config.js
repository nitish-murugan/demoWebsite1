import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    host: '0.0.0.0', // Allows external access
    port: process.env.PORT || 5173, // Uses the environment port or defaults to 5173
  }
};

