import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        return await import(`/src/content/events/${params.slug}.md`);
    } catch {
        error(404, `Could not find ${params.slug}`);
    }
}
