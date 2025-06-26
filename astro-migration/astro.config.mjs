import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Configuration pour GitHub Pages
  site: 'https://villadesk-ribean.com/',
  base: '/', // 
  build: {
    assets: '_astro'
  }
});