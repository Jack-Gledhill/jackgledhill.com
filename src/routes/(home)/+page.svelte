<script lang="ts">
    import { env } from '$lib/site.config.ts';
    import { DateFormatter } from '$lib/utils';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
    import { faFilePdf, faFlagCheckered, faLink } from '@fortawesome/free-solid-svg-icons';
    import { faDiscord, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    type CardMetadata = {
        title: string;
        subtitle: string;
        draft: boolean;
        date: string;
        links?: Partials.Socials;
        logo?: Partials.Image;
        tags?: string[];
    };

    import { page } from '$app/state';
    let { data } = $props();
</script>

<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-8">
    {#if page.url.hash === "#events"}
        {#each data.events as e (e.title)}
            {@render card({
                title: e.title,
                subtitle: e.type,
                draft: e.draft,
                date: DateFormatter.format(e.date),
                logo: e.logo,
                links: e.links
            }, e.content)}
        {/each}
    {:else if page.url.hash === "#projects"}
        {#each data.projects as p (p.title)}
            {@render card({
              title: p.title,
              subtitle: p.type,
              draft: p.draft,
              date: DateFormatter.formatRange(p.date),
              logo: p.logo,
              links: p.links,
              tags: p.technologies
            }, p.content)}
        {/each}
    {:else if page.url.hash === "#research"}
        {#each data.papers as p (p.title)}
            {@render card({
                title: p.title,
                subtitle: p.journal,
                draft: p.draft,
                date: DateFormatter.format(p.date),
                tags: p.authors,
                links: p.links
            }, p.content)}
        {/each}
    {:else}
        {#each data.committees as c (c.title)}
            {@render card({
              title: c.title,
              subtitle: c.position,
              draft: c.draft,
              date: DateFormatter.formatRange(c.date),
              logo: c.logo,
              links: c.links
            }, c.content)}
        {/each}
    {/if}
</div>

{#snippet card(meta: CardMetadata, content: Mdsvex.Renderer)}
    {#if !meta.draft || env.isDev}
        <div class="bg-slate-700 border-1 border-slate-600 rounded-xl p-4">
            <div class="grid grid-cols-4 md:grid-cols-5 gap-8">
                <div class="col-span-4 flex flex-col gap-2">
                    {#if meta.draft}
                        <div>
                            <span class="bg-red-500 text-white text-base px-2 rounded">Draft</span>
                        </div>
                    {/if}

                    <section>
                        <h3 class="text-xl font-bold">{meta.title}</h3>
                        <p class="text-lg lg:text-xl text-slate-400">{meta.subtitle}</p>
                        <p class="italic text-sm">{meta.date}</p>
                    </section>

                    {#if meta.links}
                        <div class="flex flex-row flex-wrap gap-2">
                            {#if meta.links.pdf}
                                {@render link("PDF", faFilePdf, meta.links.pdf)}
                            {/if}

                            {#if meta.links.github}
                                {@render link("GitHub", faGithub, "https://github.com/" + meta.links.github)}
                            {/if}

                            {#if meta.links.devpost}
                                {@render link("Devpost", faFlagCheckered, "https://devpost.com/" + meta.links.devpost)}
                            {/if}

                            {#if meta.links.discord}
                                {@render link("Discord", faDiscord, "https://discord.gg/" + meta.links.discord)}
                            {/if}

                            {#if meta.links.instagram}
                                {@render link("Instagram", faInstagram, "https://instagram.com/" + meta.links.instagram)}
                            {/if}

                            {#if meta.links.linkedin}
                                {@render link("LinkedIn", faLinkedin, "https://linkedin.com/in/" + meta.links.linkedin)}
                            {/if}

                            {#if meta.links.website}
                                {@render link("Website", faLink, "https://" + meta.links.website)}
                            {/if}
                        </div>
                    {/if}
                </div>

                {#if meta.logo}
                    <div class="hidden md:block">
                        <img class="rounded-lg 2xl:rounded-2xl" src={meta.logo.src} alt={meta.logo.alt} />
                    </div>
                {/if}
            </div>

            <hr class="my-4 border-slate-600" />

            <div class="flex flex-col gap-4">
                {@render content?.()}

                {#if meta.tags}
                    <div class="flex flex-row flex-wrap gap-2 text-sm">
                        {#each meta.tags as t (t)}
                            <div class="bg-slate-800 rounded-full px-3 py-1">
                                {t}
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    {/if}
{/snippet}

{#snippet link(name: string, icon: IconDefinition, href: string)}
    <a class="bg-slate-600 hover:bg-blue-500 rounded-lg px-2 py-1 transition duration-200" {href}>
        <FontAwesomeIcon icon={icon} fixedWidth /> {name}
    </a>
{/snippet}