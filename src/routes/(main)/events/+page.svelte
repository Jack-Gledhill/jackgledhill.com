<script>
    import Event from '$lib/components/event.svelte';

    let { data } = $props();
</script>

<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">
    Events & Workshops
</h2>

<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
    {#each data.content as c (c.metadata.title)}
        <Event metadata={c.metadata} slug={c.slug} />
    {/each}
</div>