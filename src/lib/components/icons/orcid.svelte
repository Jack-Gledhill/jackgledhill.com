<script>
	import Icon from '$lib/components/icons/icon.svelte';

	import { faOrcid } from '@fortawesome/free-brands-svg-icons';

	const { href } = $props();
</script>

<Icon icon={faOrcid} href={`https://orcid.org/${href}`} ariaLabel="OrcID" />