import { getAllEvents } from '$lib/content';

export async function load() {
    const content = await getAllEvents();
    return {
        content: content
    };
}
