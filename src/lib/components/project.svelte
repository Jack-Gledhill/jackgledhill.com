<script>
    import DraftBadge from '$lib/components/draft.svelte';
		import { formatDate, isDevelopment } from '$lib/utils/index.js';
		import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
		import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    let { metadata, slug } = $props();
</script>

{#if !metadata.draft || isDevelopment()}
    <div class="bg-slate-700 border-1 border-slate-600 rounded-xl p-4 transition-transform duration-300 hover:-translate-y-4">
        <a href={`/projects/${slug}`} data-sveltekit-noscroll>
            <div class="grid grid-cols-5 gap-8">
                <div class="col-span-4 flex flex-col gap-2">
                    <DraftBadge draft={metadata.draft} />

                    <section>
                        <h3 class="text-xl font-bold">{metadata.title}</h3>
                        <p class="italic text-sm">{formatDate(metadata.date)}</p>
                    </section>

                    <div class="flex flex-row flex-wrap gap-2 text-sm">
                        {#each metadata.technologies as t (t)}
                            <div class="bg-slate-600 rounded-lg px-2 py-1">
                                {t}
                            </div>
                        {/each}
                    </div>
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