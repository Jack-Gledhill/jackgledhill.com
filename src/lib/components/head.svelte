<script lang="ts">
    let { title, description }: { title?: string, description?: string } = $props();
</script>

<svelte:head>
    {#if (title)}
        <title>{title} ~ Jack Gledhill</title>
        <meta property="og:title" content={title + " ~ Jack Gledhill"} />
        <meta name="twitter:title" content={title + " ~ Jack Gledhill"} />
    {/if}

    {#if (description)}
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
    {/if}
</svelte:head>