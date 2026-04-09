import { getAllPapers } from '$lib/content';

export async function load() {
    const content = await getAllPapers();
    return {
        content: content,
    };
}
