<script>
    import DraftBadge from '$lib/components/draft.svelte';
    import { isDevelopment } from '$lib/utils';

    let { metadata, slug } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="bg-slate-700 border-1 border-slate-600 rounded-lg transition-transform duration-300 hover:-translate-y-4">
        <a href={`/projects/${slug}`}>
            <div class="xl:h-46 overflow-y-hidden rounded-t-lg">
                <img class="w-full object-contain" src={metadata.banner} alt={`${metadata.title} logo`} />
            </div>

            <div class="p-4 md:p-8">
                <DraftBadge draft={metadata.draft} />
                <h3 class="text-slate-400 font-bold uppercase text-xl lg:text-2xl">{metadata.title}</h3>

                <p class="pt-4">{@html metadata.description}</p>
            </div>
        </a>
    </div>
{/if}