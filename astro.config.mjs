import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://falko100.github.io',
  base: '/tastory-website',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});
