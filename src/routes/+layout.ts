import * as config from '$lib/site.config.ts';

export const prerender = true;

export function load() {
    return { metadata: config.head };
}
