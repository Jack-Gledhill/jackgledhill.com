<script>
    import { isDevelopment } from '$lib/utils';
    import DraftBadge from '$lib/components/draft.svelte';

    let { metadata, slug } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="grid grid-cols-4 gap-8 lg:py-4">
        <div class="col-span-1 hidden xl:block">
            <img class="rounded-lg 2xl:rounded-2xl" src={metadata.logo} alt={`${metadata.title} logo`} />
        </div>

        <div class="col-span-4 lg:col-span-3 content-center">
            <DraftBadge draft={metadata.draft} />
            <h3 class="text-xl lg:text-2xl font-bold">
                <a class="underline hover:text-slate-400" href={`/committees/${slug}`}>{metadata.title}</a>
            </h3>

            <p class="text-lg lg:text-xl">{metadata.position}</p>
            <p class="italic text-sm mb-8 lg:mb-0">{metadata.start} - {metadata.end}</p>
        </div>
    </div>
{/if}