import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const committee = await import(`../../../content/committees/${params.slug}.md`);

        return {
            content: committee.default,
            meta: committee.metadata
        };
    } catch {
        error(404, `Could not find ${params.slug}`);
    }
}
