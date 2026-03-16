import { error } from '@sveltejs/kit';
import { getCommittee } from '$lib/content';

export async function load({ params }) {
    try {
        const page = await getCommittee(params.slug);

        return {
            metadata: page.metadata,
            content: page.content
        };
    } catch {
        error(404, `Could not find ${params.slug}`);
    }
}
