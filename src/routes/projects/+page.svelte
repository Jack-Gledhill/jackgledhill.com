<script lang="ts">
    import Announcement from '$lib/components/announcement.svelte';
    import Footer from '$lib/components/footer.svelte';
    import Project from '$lib/components/project.svelte';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

    import { page } from '$app/state';
</script>

<Announcement />

<div class="p-8 md:p-12 border-b-1 border-slate-600 bg-slate-800">
    <a href="/">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        <span class="underline hover:text-slate-400">Back home</span>
    </a>

    <h1 class="font-bold text-4xl leading-20 text-center">Project Directory</h1>
    <p>
        This is an archive of all my projects, past and present. It dates as far back as 2016, and includes some of my earliest works.
    </p>
</div>

<div class="py-8 md:px-72 md:py-12 grid md:grid-cols-1 gap-16">
    {#each page.data.projects as project (project.title)}
        <Project title={project.title}
                 technologies={project.technologies}
                 src={project.banner}
                 href={project.href}
                 draft={project.draft}>
            {project.summary}
        </Project>
    {/each}
</div>

<Footer />