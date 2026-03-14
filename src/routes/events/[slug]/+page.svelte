<script>
	import Back from '$lib/components/back.svelte';

	let { data } = $props();
</script>

<Back href="/events">
    Back to Events
</Back>

<article>
    {@render data.default()}
</article>