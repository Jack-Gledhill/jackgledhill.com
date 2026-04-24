<script lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
    import { faFilePdf, faFlagCheckered, faLink } from '@fortawesome/free-solid-svg-icons';
    import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    let {
        children,
        title,
        subtitle,
        draft,
        date,
        links = undefined,
        logo = undefined,
        tags = []
    } = $props();
</script>

<div class="bg-slate-700 border border-slate-600 rounded-xl p-4">
    <div class="grid grid-cols-4 md:grid-cols-5 gap-8">
        <div class="col-span-4 flex flex-col gap-2">
            {#if draft}
                <div>
                    <span class="bg-red-500 text-white text-base px-2 rounded">Draft</span>
                </div>
            {/if}

            <section>
                <h3 class="text-xl font-bold">{title}</h3>
                <p class="text-lg lg:text-xl text-slate-400">{subtitle}</p>
                <p class="italic text-sm">{date}</p>
            </section>

            {#if links}
                <div class="flex flex-row flex-wrap gap-2">
                    {#if links.pdf}
                        {@render link("PDF", faFilePdf, links.pdf)}
                    {/if}

                    {#if links.github}
                        {@render link("GitHub", faGithub, "https://github.com/" + links.github)}
                    {/if}

                    {#if links.devpost}
                        {@render link("Devpost", faFlagCheckered, "https://devpost.com/" + links.devpost)}
                    {/if}

                    {#if links.discord}
                        {@render link("Discord", faDiscord, "https://discord.gg/" + links.discord)}
                    {/if}

                    {#if links.instagram}
                        {@render link("Instagram", faInstagram, "https://instagram.com/" + links.instagram)}
                    {/if}

                    {#if links.linkedin}
                        {@render link("LinkedIn", faLinkedin, "https://linkedin.com/in/" + links.linkedin)}
                    {/if}

                    {#if links.website}
                        {@render link("Website", faLink, "https://" + links.website)}
                    {/if}
                </div>
            {/if}
        </div>

        {#if logo}
            <div class="hidden md:block">
                <enhanced:img class="rounded-lg 2xl:rounded-2xl" src={logo.src} alt={logo.alt} />
            </div>
        {/if}
    </div>

    <hr class="my-4 border-slate-600" />

    <div class="flex flex-col gap-4">
        {@render children?.()}

        {#if tags}
            <div class="flex flex-row flex-wrap gap-2 text-sm">
                {#each tags as t (t)}
                    <div class="bg-slate-800 rounded-full px-3 py-1">
                        {t}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

{#snippet link(name: string, icon: IconDefinition, href: string)}
    <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" {href}>
        <FontAwesomeIcon icon={icon} fixedWidth /> {name}
    </a>
{/snippet}