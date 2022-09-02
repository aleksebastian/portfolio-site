import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),

		prerender: {
			default: true,
			entries: ['*']
		}
	},
	preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
