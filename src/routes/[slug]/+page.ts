import { env } from '$lib/site.config.ts';
import { getPage } from '$lib/mdsvex';

import { error } from '@sveltejs/kit';

export function load({ params }) {
    const page = getPage(params.slug);
    if (!page) {
        error(404);
    } else if (page.draft && !env.isDev) {
        error(502);
    } else {
        return {
            metadata: { ...page },
            content: page.content,
        };
    }
}
