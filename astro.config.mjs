import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://birras.lidereducacional.com.br',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
