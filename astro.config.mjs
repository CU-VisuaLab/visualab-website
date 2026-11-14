#import { defineConfig } from 'astro/config';
#import mdx from '@astrojs/mdx';
#export default defineConfig({ site: 'https://unc-visualab.org', integrations: [mdx()] });
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://cu-visualab.github.io',
  base: '/visualab-website',
  integrations: [mdx()]
});
