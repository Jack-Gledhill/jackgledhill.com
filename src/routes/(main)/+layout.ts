import { error } from '@sveltejs/kit';

export async function load() {
    try {
        // @ts-expect-error IDE always complains even when path exists
        const page = await import('/src/content/index.md');

        return {
            metadata: page.metadata.meta,
            hero: page.metadata.hero
        };
    } catch {
        error(501, 'Missing or malformed index.md file');
    }
}
