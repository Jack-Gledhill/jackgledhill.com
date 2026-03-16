<script>
	import Back from '$lib/components/back.svelte';
    import Links from '$lib/components/links.svelte';

	let { data } = $props();
</script>

<Back href="/projects">
    Back to Projects
</Back>

<section class="text-center flex flex-col gap-2">
    <h1 class="text-4xl font-bold">{data.metadata.title}</h1>
    <p class="italic">{data.metadata.date.toString()}</p>
</section>

<Links links={data.metadata.links} />

<article>
    {@render data.content()}
</article>