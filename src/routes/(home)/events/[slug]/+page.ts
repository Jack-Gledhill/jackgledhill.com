import { error } from '@sveltejs/kit';
import { getEvent } from '$lib/content';

export async function load({ params }) {
    const page = await getEvent(params.slug);
    if (!page) {
        error(404);
    }

    return {
        metadata: page.metadata,
        content: page.content
    };
}
