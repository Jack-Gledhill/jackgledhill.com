<script lang="ts">
	import "../app.css";
    import "@fortawesome/fontawesome-svg-core/styles.css";
    import { config } from "@fortawesome/fontawesome-svg-core";

    import { Head } from "$lib/content";

    config.autoAddCss = false;

	let { children } = $props();
</script>

<svelte:head>
    <title>{Head.metadata.title}</title>
    <meta name="description" content={Head.metadata.description} />
    <meta name="keywords" content={Head.metadata.keywords.join(", ")} />

    <!-- OpenGraph -->
    <meta property="og:title" content={Head.metadata.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jackgledhill.com" />
    <meta property="og:description" content={Head.metadata.description} />
    <meta property="og:site_name" content="jackgledhill.com" />
    <meta property="og:locale" content="en_GB" />

    <!-- Twitter -->
    <meta name="twitter:title" content={Head.metadata.title} />
    <meta name="twitter:description" content={Head.metadata.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://jackgledhill.com" />

    {#if Head.metadata.banner}
        <meta property="og:image" content={Head.metadata.banner.src} />
        <meta property="og:image:alt" content={Head.metadata.banner.alt} />
        <meta property="og:image:width" content={Head.metadata.banner.width.toString()} />
        <meta property="og:image:height" content={Head.metadata.banner.height.toString()} />

        <meta name="twitter:image" content={Head.metadata.banner.src} />
        <meta name="twitter:image:alt" content={Head.metadata.banner.alt} />
        <meta name="twitter:image:width" content={Head.metadata.banner.width.toString()} />
        <meta name="twitter:image:height" content={Head.metadata.banner.height.toString()} />
    {/if}
</svelte:head>

{@render children()}