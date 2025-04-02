<script>
    const { draft } = $props();
</script>

{#if draft}
    <span class="bg-red-500 text-white text-base px-2 rounded-full">DRAFT</span>
{/if}