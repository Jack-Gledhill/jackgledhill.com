import { error } from '@sveltejs/kit';
import { getAllProjects } from '$lib/content';

export async function load() {
    try {
        const content = await getAllProjects();

        return {
            content: content
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing index.md content file');
    }
}
