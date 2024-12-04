import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps for production
  },
  base: '/MandyMoney/', // Ensure base is set correctly for GitHub Pages
});