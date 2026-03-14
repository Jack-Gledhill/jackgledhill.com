<script>
	import Committee from '$lib/components/committee.svelte';

	let { data } = $props();
</script>

<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">
    Committees
</h2>

<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
    {#each data.content as c (c.metadata.title)}
        <Committee metadata={c.metadata} slug={c.slug} />
    {/each}
</div>