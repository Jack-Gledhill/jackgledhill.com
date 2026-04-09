import { error } from '@sveltejs/kit';

export async function load() {
    try {
        // @ts-expect-error IDE always complains even when path exists
        const page = await import('/src/content/index.md');
        // @ts-expect-error IDE always complains even when path exists
        const hero = await import('/src/content/hero.md');

        return {
            metadata: page.metadata,
            hero: hero.metadata
        };
    } catch {
        error(501, 'Missing or malformed index.md or hero.md file');
    }
}
