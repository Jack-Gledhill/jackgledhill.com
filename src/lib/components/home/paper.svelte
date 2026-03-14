<script>
    import DraftBadge from '$lib/components/draft.svelte';
    import { isDevelopment, formatDate } from '$lib/utils';
		import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
		import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

    let { metadata, content } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="bg-slate-700 border-1 border-slate-600 rounded-xl p-4 flex flex-col">
        <div class="flex flex-col gap-4">
            <div>
                <DraftBadge draft={metadata.draft} />
                <h3 class="text-xl font-bold">{metadata.title}</h3>
                <p class="text-lg lg:text-xl text-slate-400">{metadata.journal}</p>
                <p class="text-sm">{metadata.authors.join(", ")}</p>
                <p class="italic text-sm">{formatDate(metadata.date)}</p>
            </div>

            <div class="flex flex-row gap-2">
                {#if metadata.links.pdf}
                    <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" href={metadata.links.pdf}>
                        <FontAwesomeIcon icon={faFilePdf} fixedWidth /> PDF
                    </a>
                {/if}
            </div>
        </div>

        <hr class="my-4 border-slate-600" />
        {@render content()}
    </div>
{/if}