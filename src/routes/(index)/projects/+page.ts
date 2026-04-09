import { getAllProjects } from '$lib/content';

export async function load() {
    const content = await getAllProjects();
    return {
        content: content
    };
}
