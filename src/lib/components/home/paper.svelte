<script>
    import DraftBadge from '$lib/components/draft.svelte';
    import { isDevelopment, formatDate } from '$lib/utils';

    let { metadata, content } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="bg-slate-700 border-1 border-slate-600 rounded-xl p-4">
        <DraftBadge draft={metadata.draft} />
        <h3 class="text-lg md:text-xl font-bold">{metadata.title}</h3>
        <p>{metadata.authors.join(", ")}</p>
        <p class="italic text-sm text-slate-400 pb-2">{metadata.journal}, {formatDate(metadata.date)}</p>

        <div class="flex flex-row gap-2 text-xs">
            <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" href={metadata.links.docx}>
                DOCX
            </a>
            <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" href={metadata.links.pdf}>
                PDF
            </a>
        </div>

        <hr class="my-4 border-slate-600" />

        <div class="text-sm">
            {@render content()}
        </div>
    </div>
{/if}