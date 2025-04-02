<script>
	import Icon from '$lib/components/icons/icon.svelte';

	import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

	const { href } = $props();
</script>

<Icon icon={faEarthEurope} href={href} />