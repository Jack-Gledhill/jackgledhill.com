import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load() {
    try {
        const page = await import('/src/content/index.md');
        const hero = await import('/src/content/hero.md');

        return {
            metadata: page.metadata,
            hero: hero.metadata
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing index.md content file');
    }
}