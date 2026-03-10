<script>
    import DraftBadge from '$lib/components/draft.svelte';
    import { isDevelopment, formatDate } from '$lib/utils';

    let { metadata, slug } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1 hidden md:block">
            <img class="rounded-lg" src={metadata.logo} alt={`${metadata.title} logo`} />
        </div>

        <div class="col-span-4 md:col-span-3 content-center">
            <DraftBadge draft={metadata.draft} />
            <h3 class="text-lg md:text-2xl font-bold">
                <a class="underline hover:text-slate-400" href={`/events/${slug}`}>{metadata.title}</a>
            </h3>
            <p class="italic text-sm">{formatDate(metadata.date)}</p>

            <p>{@html metadata.description}</p>
        </div>
    </div>
{/if}