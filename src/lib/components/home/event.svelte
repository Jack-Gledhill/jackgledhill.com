<script>
    import DraftBadge from '$lib/components/draft.svelte';
    import { isDevelopment, formatDate } from '$lib/utils';

    let { metadata, slug } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="grid grid-cols-5 gap-8">
        <div class="col-span-1">
            <img class="rounded-lg" src={metadata.logo} alt={`${metadata.title} logo`} />
        </div>

        <div class="col-span-4 flex flex-col gap-4">
            <div>
                <DraftBadge draft={metadata.draft} />
                <h3 class="text-lg md:text-2xl font-bold">
                    <a class="underline hover:text-slate-400" href={`/events/${slug}`}>{metadata.title}</a>
                </h3>
                <p class="italic text-sm">{formatDate(metadata.date)}</p>
            </div>

            {@html metadata.description}
        </div>
    </div>
{/if}