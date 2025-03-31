<script>
	import { isDevelopment } from '$lib';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    const {
        title,      // Job title during the volunteering
        company,    // Name of the company or organisation
        src,        // Path to the company's logo
        alt,        // Alt text for the company's logo
        startDate,  // Date that the job started
        endDate,    // Date that the volunteering ended, or 'present' if ongoing
        links,      // Array of social links to show with schema {icon: faGithub, href: 'https://github.com'}
        draft=false // Components marked as draft will not show up in production and are marked as drafts in development
    } = $props();
</script>

{#if !draft || isDevelopment()}
<div class="col-span-1 hidden xl:block">
    <img class="rounded-lg 2xl:rounded-2xl" src={src} alt={alt} />
</div>

<div class="col-span-4 lg:col-span-3 content-center">
    {#if draft}
        <span class="bg-red-500 text-white text-base px-2 rounded-full">DRAFT</span>
    {/if}
    <h3 class="text-xl lg:text-2xl font-bold text-slate-400">{title}</h3>

    <p class="text-lg lg:text-xl">{company}</p>
    <p class="italic text-sm mb-8 lg:mb-0">{startDate} - {endDate}</p>
    <div class="text-3xl lg:text-xl grid grid-cols-3 md:grid-cols-6 gap-[1em]">
        {#each links as { icon, href } (href)}
        <a class="hover:text-slate-400" {href} target="_blank">
            <FontAwesomeIcon {icon} fixedWidth />
        </a>
        {/each}
    </div>
</div>
{/if}