<script>
    import DraftBadge from '$lib/components/draft.svelte';
	import { isDevelopment } from '$lib/utils/index.js';

    const {
        role,
        company,
        logo,
        startDate,
        endDate,
        slug,
        draft=false
    } = $props();
</script>

{#if !draft || isDevelopment()}
<div class="grid grid-cols-4 gap-8 py-4">
    <div class="col-span-1 hidden xl:block">
        <img class="rounded-lg 2xl:rounded-2xl" src={logo} alt={`${company} logo`} />
    </div>

    <div class="col-span-4 lg:col-span-3 content-center">
        <DraftBadge {draft} />
        <h3 class="text-xl lg:text-2xl font-bold">
            <a class="underline hover:text-slate-400" href={`/about/${slug}`}>{company}</a>
        </h3>

        <p class="text-lg lg:text-xl">{role}</p>
        <p class="italic text-sm mb-8 lg:mb-0">{startDate} - {endDate}</p>
    </div>
</div>
{/if}