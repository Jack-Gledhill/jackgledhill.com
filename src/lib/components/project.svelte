<script>
    import DraftBadge from '$lib/components/draft.svelte';
		import { formatDate, isDevelopment } from '$lib/utils/index.js';

    let { metadata, slug } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="bg-slate-700 border-1 border-slate-600 rounded-xl p-4 transition-transform duration-300 hover:-translate-y-4">
        <a href={`/projects/${slug}`}>
            <div class="grid grid-cols-5 gap-8">
                <div class="col-span-4">
                    <DraftBadge draft={metadata.draft} />
                    <h3 class="text-xl font-bold">{metadata.title}</h3>
                    <p class="italic text-sm">{formatDate(metadata.date)}</p>
                </div>

                <div class="col-span-1">
                    <img class="rounded-lg 2xl:rounded-2xl" src={metadata.logo.src} alt={metadata.logo.alt} />
                </div>
            </div>

            <hr class="my-4 border-slate-600" />
            {@html metadata.description}
        </a>
    </div>
{/if}