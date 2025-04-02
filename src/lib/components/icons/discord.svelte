<script>
	import Icon from '$lib/components/icons/icon.svelte';

	import { faDiscord } from '@fortawesome/free-brands-svg-icons';

	const { href } = $props();
</script>

<Icon icon={faDiscord} href={`https://discord.gg/${href}`} />