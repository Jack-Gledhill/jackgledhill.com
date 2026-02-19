<script>
    import DraftBadge from '$lib/components/draft.svelte';

    let { name, client, summary, draft, logo, href } = $props();
</script>

<div class="bg-slate-700 border-1 border-slate-600 rounded-lg transition-transform duration-300 hover:-translate-y-4">
    <a {href}>
        <div class="xl:h-46 overflow-y-hidden rounded-t-lg">
            <img class="w-full object-contain" src={logo} alt={`${name} logo`} />
        </div>

        <div class="p-4 md:p-8">
            <DraftBadge draft={draft} />
            <h3 class="text-slate-400 font-bold uppercase text-xl lg:text-2xl">{name}</h3>
            <p class="text-lg lg:text-xl">{client}</p>

            <p class="pt-4">{@html summary}</p>
        </div>
    </a>
</div>