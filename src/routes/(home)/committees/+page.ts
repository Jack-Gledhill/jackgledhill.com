import { getAllCommittees } from '$lib/content';

export async function load() {
    const content = await getAllCommittees();
    return {
        content: content
    };
}
