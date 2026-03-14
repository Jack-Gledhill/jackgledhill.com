<script>
	import Back from '$lib/components/back.svelte';
    import Links from '$lib/components/links.svelte';
    import { formatDate } from '$lib/utils/index.js';

	let { data } = $props();
</script>

<Back href="/events">
    Back to Events
</Back>

<section class="text-center flex flex-col gap-2">
    <h1 class="text-4xl font-bold capitalize">{data.metadata.title}</h1>
    <h2 class="text-slate-400 font-bold text-2xl">{data.metadata.type}</h2>
    <p class="italic">{formatDate(data.metadata.date)}</p>
</section>

<Links links={data.metadata.links} />

<article>
    {@render data.default()}
</article>