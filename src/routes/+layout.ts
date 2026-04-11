import * as config from '$lib/site.config.ts';

export const prerender = true;

export async function load() {
    return { metadata: config.head };
}
