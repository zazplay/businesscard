import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs, so the build works under GitHub Pages' /businesscard/ path and at a domain root alike.
  base: './',
});
