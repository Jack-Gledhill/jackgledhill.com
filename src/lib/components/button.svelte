<script>
	let { href, children } = $props();
</script>

<a class="p-4 rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-200 shadow-md" {href} target="_blank">
    {@render children?.()}
</a>