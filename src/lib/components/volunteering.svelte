<script>
    import DraftBadge from '$lib/components/draft.svelte';
	import IconArray from '$lib/components/icons/array.svelte';
	import { isDevelopment } from '$lib/utils/index.js';

    const {
        title,
        company,
        src,
        alt,
        startDate,
        endDate,
        links,
        draft=false
    } = $props();
</script>

{#if !draft || isDevelopment()}
<div class="grid grid-cols-4 gap-8 py-4">
    <div class="col-span-1 hidden xl:block">
        <img class="rounded-lg 2xl:rounded-2xl" {src} {alt} />
    </div>

    <div class="col-span-4 lg:col-span-3 content-center">
        <DraftBadge {draft} />
        <h3 class="text-xl lg:text-2xl font-bold text-slate-400">{title}</h3>

        <p class="text-lg lg:text-xl">{company}</p>
        <p class="italic text-sm mb-8 lg:mb-0">{startDate} - {endDate}</p>
        <div class="text-3xl lg:text-xl grid grid-cols-3 md:grid-cols-6 gap-[1em]">
            <IconArray {links} />
        </div>
    </div>
</div>
{/if}