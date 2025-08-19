import type { LayoutLoad } from '../../../../.svelte-kit/types/src/routes';

export const load: LayoutLoad = () => {
    return {
        meta: {
            title: "Copyright ~ Jack Gledhill",
            description: "Copyright and attribution information for Jack Gledhill's website.",
            keywords: []
        }
    };
};