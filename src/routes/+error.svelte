<script lang="ts">
    import { pageProps, defaultProps } from '$lib/errors.config.ts';

    import Error from '$lib/components/error.svelte';

    import { page } from '$app/state';
	const { title, message, emote, isBug }: ErrorPage.Props = pageProps[page.status] || defaultProps;
</script>

<Error {title} {message} {emote} {isBug} status={page.status} />