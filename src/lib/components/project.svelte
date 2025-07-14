<script>
	import DraftBadge from '$lib/components/draft.svelte';
	import { isDevelopment } from '$lib/utils/index.js';

    const {
		name,
        client,
		logo,
        slug,
        draft=false,
		children
	} = $props();
</script>

{#if !draft || isDevelopment()}
<div class="bg-slate-700 border-1 border-slate-600 rounded-lg transition-transform duration-300 hover:-translate-y-4">
    <a href={`/about/${slug}`}>
        <div class="flex justify-center h-78 overflow-y-hidden">
            <img class="rounded-t-lg w-full object-cover" src={logo} alt={`${name} logo`} />
        </div>

        <div class="p-4 md:p-8">
            <DraftBadge {draft} />
            <h3 class="text-slate-400 font-bold uppercase text-xl lg:text-2xl">{name}</h3>
            <p class="text-lg lg:text-xl">{client}</p>

            <p class="pt-4">{@render children?.()}</p>
        </div>
    </a>
</div>
{/if}