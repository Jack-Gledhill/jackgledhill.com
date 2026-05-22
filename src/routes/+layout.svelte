<script lang="ts">
	import '../app.css';
    import '@fortawesome/fontawesome-svg-core/styles.css';
    import { config } from '@fortawesome/fontawesome-svg-core';
    import { Head } from '$lib/components';

    config.autoAddCss = false;

    import { page } from '$app/state';
	let { children } = $props();
</script>

<Head {...page.data.metadata} />

{@render children()}