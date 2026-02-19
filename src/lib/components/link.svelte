<script>
	let { href, children } = $props();
</script>

<a class="underline hover:text-slate-400" target="_blank" {href}>
    {@render children?.()}
</a>