<script>
    const { draft } = $props();
</script>

{#if draft}
    <div>
        <span class="bg-red-500 text-white text-base px-2 rounded">Draft</span>
    </div>
{/if}