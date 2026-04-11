<script>
	import '../app.css';
    import Head from '$lib/components/head.svelte';

    import { page } from '$app/state';
	let { children } = $props();
</script>

<Head {...page.data.metadata} />

{@render children()}