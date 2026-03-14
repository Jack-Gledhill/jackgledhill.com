<script>
    import Project from '$lib/components/project.svelte';

    let { data } = $props();
</script>

<h2 class="uppercase text-2xl md:text-4xl text-slate-400 font-bold">
    Projects
</h2>

<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
    {#each data.content as c (c.metadata.title)}
        <Project metadata={c.metadata} slug={c.slug} />
    {/each}
</div>