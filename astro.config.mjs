import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static', // important pour GitHub Pages
  site: 'https://liladoc.github.io/',
  base: '/villak/',

});
