<script lang="ts">
    import { Error } from '$lib/components';
    import { pageProps, defaultProps } from '$lib/errors.config.ts';

    import { page } from '$app/state';
	const { title, message, emote, isBug }: ErrorPage.Props = pageProps[page.status] || defaultProps;
</script>

<Error {title} {message} {emote} {isBug} status={page.status} />