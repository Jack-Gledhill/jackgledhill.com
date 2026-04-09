import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true
        })
    },
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: [mdsvex({ extensions: ['.svx', '.md'] })]
};
