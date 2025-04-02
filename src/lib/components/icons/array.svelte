<script>
	import Discord from '$lib/components/icons/discord.svelte';
    import GitHub from '$lib/components/icons/github.svelte';
    import Instagram from '$lib/components/icons/instagram.svelte';
    import LinkedIn from '$lib/components/icons/linkedin.svelte';
    import OrcID from '$lib/components/icons/orcid.svelte';
    import Website from '$lib/components/icons/website.svelte';

    const { links } = $props();
</script>

{#if links.discord}
    <Discord href={links.discord} />
{/if}

{#if links.github}
    <GitHub href={links.github} />
{/if}

{#if links.instagram}
    <Instagram href={links.instagram} />
{/if}

{#if links.linkedin}
    <LinkedIn href={links.linkedin} />
{/if}

{#if links.orcid}
    <OrcID href={links.orcid} />
{/if}

{#if links.website}
    <Website href={links.website} />
{/if}