import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external access
    port: 5173, // Uses the environment port or defaults to 5173
    allowedHosts: ['demowebsite1.onrender.com'], // No trailing slash
  }
});
