<script>
	import Icon from '$lib/components/icons/icon.svelte';

	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

	const { href } = $props();
</script>

<Icon icon={faLinkedin} href={`https://www.linkedin.com/company/${href}`} />