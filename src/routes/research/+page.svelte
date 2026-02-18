<script lang="ts">
    import Announcement from '$lib/components/announcement.svelte';
    import Footer from '$lib/components/footer.svelte';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

    import { page } from '$app/state';
    import DraftBadge from '$lib/components/draft.svelte';
</script>

<Announcement />

<div class="p-8 md:p-12 border-b-1 border-slate-600 bg-slate-800">
    <a href="/">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        <span class="underline hover:text-slate-400">Back home</span>
    </a>

    <h1 class="font-bold text-4xl leading-20 text-center">Research</h1>
    <p>

    </p>
</div>

<div class="py-8 md:px-72 md:py-12 grid md:grid-cols-1 gap-8">
    {#each page.data.research as paper (paper.title)}
        <div>
            <DraftBadge draft={paper.draft} />
            <h3 class="text-lg md:text-xl font-bold">{paper.title}</h3>
            <p>{paper.authors.join(", ")}</p>
            <p class="italic text-sm text-slate-400 pb-2">{paper.journal}, {paper.date}</p>

            <div class="flex flex-row gap-2 text-xs">
                <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" href={paper.links.docx}>
                    DOCX
                </a>
                <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" href={paper.links.pdf}>
                    PDF
                </a>
            </div>
        </div>

        <hr class="border-slate-600" />
    {/each}
</div>

<Footer />