import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://falko100.github.io',
  base: '/tastory-website',
  build: {
    assets: 'assets',
  },
});
