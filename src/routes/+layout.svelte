<script lang="ts">
	import '../app.css';

    import type { LayoutProps } from './$types';
    import { page } from '$app/state';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <title>{page.data.meta.title}</title>
    <meta name="description" content={page.data.meta.description} />
    <meta name="keywords" content={page.data.meta.keywords.join(", ")} />
    <meta name="copyright" content="Jack Gledhill" />
    <meta name="language" content="en_GB" />
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#1f6bcb">
    <meta charset="utf-8" />
    <link rel="canonical" href="https://jackgledhill.com" />

    <!-- OpenGraph -->
    <meta property="og:title" content={page.data.meta.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jackgledhill.com" />
    <meta property="og:description" content={page.data.meta.description} />
    <meta property="og:site_name" content="Jack Gledhill" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:image:alt" content="Photo of Jack taken by Chkn Media at ICHack 2026" />
    <meta property="og:image:width" content="5906" />
    <meta property="og:image:height" content="3937" />

    <!-- Twitter -->
    <meta name="twitter:title" content={page.data.meta.title} />
    <meta name="twitter:description" content={page.data.meta.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://jackgledhill.com" />
    <meta name="twitter:creator" content="@thejackgledhill" />
    <meta name="twitter:image:alt" content="Photo of Jack taken by Chkn Media at ICHack 2026" />
    <meta name="twitter:image:width" content="5906" />
    <meta name="twitter:image:height" content="3937" />
</svelte:head>

{@render children()}
