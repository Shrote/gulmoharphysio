// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows connections from any device on the network
    port: 3000,      // Specify the port (default is 5173, but you can use 3000 or any other port)
  },
});
