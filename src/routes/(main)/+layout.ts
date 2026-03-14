import { error } from '@sveltejs/kit';

export async function load() {
    try {
        const hero = await import('/src/content/hero.md');

        return {
            hero: hero.metadata
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing index.md content file');
    }
}
