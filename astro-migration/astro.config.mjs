import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Configuration pour GitHub Pages
  base: '/vilakarib/', // Remplacez par le nom de votre repo
  build: {
    assets: '_astro'
  }
});