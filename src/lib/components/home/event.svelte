<script>
    import DraftBadge from '$lib/components/draft.svelte';

    let { name, src, draft, href, date, summary } = $props();
</script>

<div class="grid grid-cols-4 gap-4">
    <div class="col-span-1 hidden md:block">
        <img class="rounded-lg" {src} alt={`${name} logo`} />
    </div>

    <div class="col-span-4 md:col-span-3 content-center">
        <DraftBadge {draft} />
        <h3 class="text-lg md:text-2xl font-bold">
            <a class="underline hover:text-slate-400" {href}>{name}</a>
        </h3>
        <p class="italic text-sm">{date}</p>

        <p>{@html summary}</p>
    </div>
</div>