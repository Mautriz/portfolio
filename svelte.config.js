import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const basePath = process.env.APP_BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		immutable: true
	},

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: true
	}),

	kit: {
		paths: {
			base: basePath
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: `build`,
			fallback: '404.html'
		})
	}
};

export default config;
