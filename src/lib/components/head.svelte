<script lang="ts">
    let { title, description, keywords = [], banner }: Config.Head = $props();
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(", ")} />

    <!-- OpenGraph -->
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jackgledhill.com" />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="jackgledhill.com" />
    <meta property="og:locale" content="en_GB" />

    <!-- Twitter -->
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://jackgledhill.com" />
    <meta name="twitter:creator" content="@thejackgledhill" />

    {#if banner}
        <meta property="og:image" content={banner.src} />
        <meta property="og:image:alt" content={banner.alt} />
        <meta property="og:image:width" content={banner.width} />
        <meta property="og:image:height" content={banner.height} />

        <meta name="twitter:image" content={banner.src} />
        <meta name="twitter:image:alt" content={banner.alt} />
        <meta name="twitter:image:width" content={banner.width} />
        <meta name="twitter:image:height" content={banner.height} />
    {/if}
</svelte:head>