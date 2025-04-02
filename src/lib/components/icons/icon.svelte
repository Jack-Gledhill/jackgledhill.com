<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	const { icon, href } = $props();
</script>

<a class="hover:text-slate-400" {href} target="_blank">
    <FontAwesomeIcon {icon} fixedWidth />
</a>