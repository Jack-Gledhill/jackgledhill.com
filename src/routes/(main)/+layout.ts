import { error } from '@sveltejs/kit';

export async function load() {
    try {
        // @ts-expect-error IDE always complains even when path exists
        const hero = await import('/src/content/hero.md');

        return {
            hero: hero.metadata
        };
    } catch {
        error(404);
    }
}
