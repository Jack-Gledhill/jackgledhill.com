import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        prerender: {
            handleHttpError: ({ status, message }) => {
                // Ignore 418 errors encountered when building - these are always intentional
                if (status === 418) {
                    return;
                }

                throw new Error(message);
            }
        }
    },
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: [
        mdsvex({ extensions: ['.svx', '.md'] }),
        vitePreprocess()
    ]
};
