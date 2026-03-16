import { error } from '@sveltejs/kit';
import { getProject } from '$lib/content';

export async function load({ params }) {
    try {
        const page = await getProject(params.slug);
        return {
            metadata: page.metadata,
            content: page.content
        };
    } catch {
        error(404, `Could not find ${params.slug}`);
    }
}
