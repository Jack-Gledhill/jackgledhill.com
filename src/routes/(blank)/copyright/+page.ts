import { error } from '@sveltejs/kit';

export async function load() {
    try {
        const page = await import('/src/content/copyright.md');
        return {
            metadata: page.metadata,
            default: page.default
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing copyright.md content file');
    }
}
