import { error } from '@sveltejs/kit';
import { getAllCommittees } from '$lib/content';

export async function load() {
    try {
        const content = await getAllCommittees();

        return {
            content: content
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing index.md content file');
    }
}
