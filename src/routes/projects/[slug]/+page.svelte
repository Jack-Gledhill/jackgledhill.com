<script>
	import Back from '$lib/components/back.svelte';

	let { data } = $props();
</script>

<Back href="/projects">
    Back to Projects
</Back>

<article>
    {@render data.default()}
</article>