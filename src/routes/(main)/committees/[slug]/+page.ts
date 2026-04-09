import { error } from '@sveltejs/kit';
import { getCommittee } from '$lib/content';

export async function load({ params }) {
    const page = await getCommittee(params.slug);
    if (!page) {
        error(404);
    }

    return {
        metadata: page.metadata,
        content: page.content
    };
}
