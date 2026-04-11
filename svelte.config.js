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
        experimental: {
            handleRenderingErrors: true
        },
        prerender: {
            handleMissingId: 'ignore'
        }
    },
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: [
        mdsvex({ extensions: ['.svx', '.md'] }),
        vitePreprocess()
    ]
};
