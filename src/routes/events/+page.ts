import { error } from '@sveltejs/kit';
import { getAllEvents } from '$lib/content';

export async function load() {
    try {
        const content = await getAllEvents();

        return {
            content: content
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing index.md content file');
    }
}
