import { error } from '@sveltejs/kit';
import { getProject } from '$lib/content';

export async function load({ params }) {
    const page = await getProject(params.slug);
    if (!page) {
        error(404);
    }

    return {
        metadata: page.metadata,
        content: page.content
    };
}
