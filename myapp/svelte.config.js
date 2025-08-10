import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    // If your site is hosted in a subfolder on Hostinger, uncomment and set it here:
    // paths: { base: '/subfolder' }
  }
};

export default config;
