<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	const { icon, href, ariaLabel } = $props();
</script>

<a class="hover:text-slate-400" {href} target="_blank" aria-label={ariaLabel}>
    <FontAwesomeIcon {icon} fixedWidth />
</a>