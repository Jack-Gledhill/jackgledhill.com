<script lang="ts">
	import '../app.css';
    import { Head } from '$lib/components';

    import { page } from '$app/state';
	let { children } = $props();
</script>

<Head {...page.data.metadata} />

{@render children()}