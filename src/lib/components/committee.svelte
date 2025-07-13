<script>
	import DraftBadge from '$lib/components/draft.svelte';
	import { isDevelopment } from '$lib/utils/index.js';

	const {
		role,
		society,
        slug,
		startDate,
		endDate,
		draft=false
	} = $props();
</script>

{#if !draft || isDevelopment()}
    <div class="py-4">
        <DraftBadge {draft} />
        <h3 class="text-xl lg:text-2xl font-bold">
            <a class="underline hover:text-slate-400" href={`/societies/${slug}`}>{society}</a>
        </h3>

        <p class="text-lg lg:text-xl">{role}</p>
        <p class="italic text-sm">{startDate} - {endDate}</p>
    </div>
{/if}