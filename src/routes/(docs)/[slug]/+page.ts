import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const page = await import(`../../../content/docs/${params.slug}.md`);
        return {
            metadata: page.metadata,
            default: page.default
        };
    } catch (e) {
        console.log(e);
        error(404, 'Missing content file');
    }
}
