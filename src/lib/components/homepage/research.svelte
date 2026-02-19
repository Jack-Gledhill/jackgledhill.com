<script>
    import DraftBadge from '$lib/components/draft.svelte';

    let { title, date, description, draft, authors, journal, links } = $props();
</script>

<div class="bg-slate-700 border-1 border-slate-600 rounded-xl p-4">
    <DraftBadge draft={draft} />
    <h3 class="text-lg md:text-xl font-bold">{title}</h3>
    <p>{authors.join(", ")}</p>
    <p class="italic text-sm text-slate-400 pb-2">{journal}, {date}</p>

    <div class="flex flex-row gap-2 text-xs">
        <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" href={links.docx}>
            DOCX
        </a>
        <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" href={links.pdf}>
            PDF
        </a>
    </div>

    <hr class="my-4 border-slate-600" />

    <p class="text-sm">
        {@html description}
    </p>
</div>