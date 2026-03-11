import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tastory.nl',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});
