import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // important for SPA routing
      precompress: false
    })
    // If your site is hosted in a subfolder on Hostinger, uncomment and set it here:
    // paths: { base: '/subfolder' }
  }
};

export default config;
