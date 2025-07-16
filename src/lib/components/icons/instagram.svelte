<script>
	import Icon from '$lib/components/icons/icon.svelte';

    import { faInstagram } from '@fortawesome/free-brands-svg-icons';

	const { href } = $props();
</script>

<Icon icon={faInstagram} href={`https://www.instagram.com/${href}`} ariaLabel="Discord" />