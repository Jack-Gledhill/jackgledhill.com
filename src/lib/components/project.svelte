<script>
    import DraftBadge from '$lib/components/draft.svelte';

    const { title, technologies, src, href, draft, children } = $props();
</script>

<div class="grid grid-cols-5 gap-6">
    <div class="col-span-1">
        <img class="rounded-lg 2xl:rounded-2xl" {src} alt={`${title} logo`} />
    </div>

    <div class="col-span-4">
        <h3 class="text-xl lg:text-2xl font-bold">
            <a class="underline hover:text-slate-400" {href}>{title}</a>
            <DraftBadge {draft} />
        </h3>

        <div class="text-sm py-4">
            {@render children?.()}
        </div>

        <div class="flex gap-2">
            {#each technologies as tech (tech)}
                <span class="bg-gray-400 text-slate-950 text-base px-2 rounded-full">{tech}</span>
            {/each}
        </div>
    </div>
</div>