import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const project = await import(`../../../content/projects/${params.slug}.md`);

        return {
            content: project.default,
            meta: project.metadata
        };
    } catch {
        error(404, `Could not find ${params.slug}`);
    }
}
