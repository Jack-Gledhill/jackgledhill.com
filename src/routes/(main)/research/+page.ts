import { error } from '@sveltejs/kit';
import { getAllPapers } from '$lib/content';

export async function load() {
    try {
        const content = await getAllPapers();

        return {
            content: content,
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing index.md content file');
    }
}
