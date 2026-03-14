<script>
	import Back from '$lib/components/back.svelte';

	let { data } = $props();
</script>

<Back href="/committees">
    Back to Committees
</Back>

<article>
    {@render data.default()}
</article>